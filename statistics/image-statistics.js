function getImageStats(rejectCorsErr) {
  let imgArr = document.getElementsByTagName("img");
  let arr = [];

  let obj = {
    htmlImage: null,
    isAbsolutePath: null,
    hasId: null,
    imageExtension: null,
    hasAltProp: null,
    dimensionXY: null,
    src: null,
    validUrl: null,
    serverSize: null
  };

  for (let i = 0; i < imgArr.length; i++) {
    let extensionArr = null;
    let corsExtension = null;
    if (!!imgArr[i].src) {
      extensionArr = imgArr[i].src.split(".");
      corsExtension = imgArr[i].src.split("/").filter(x => !!x)[1];
    }
    obj = {
      ...obj,
      src: imgArr[i].src,
      isAbsolutePath: !!imgArr[i].src
        ? /^https?:\/\//i.test(imgArr[i].getAttribute("src"))
        : null,
      CORS: corsExtension
        ? corsExtension.indexOf(location.hostname) <= 0
        : null,
      imageExtension: extensionArr ? extensionArr[extensionArr.length - 1] : "",
      serverSize: null,
      htmlImage: imgArr[i],
      hasId: !!imgArr[i].id,
      hasAltProp: !!imgArr[i].alt,
      dimensionXY: imgArr[i].width + "x" + imgArr[i].height
    };
    arr.push(obj);
  }

  Promise.all(
    arr.map(x =>
      fetch(x.src, { mode: rejectCorsErr ? "no-cors" : "cors" }).catch(_ =>
        Promise.resolve()
      )
    )
  )
    .then(res => {
      for (let i = 0; i < res.length; i++) {
        if (!res[i] || !res[i].headers.get("content-length")) continue;
        arr[i] = {
          ...arr[i],
          serverSize:
            (parseFloat(res[i].headers.get("content-length")) / 1024).toFixed(
              2
            ) + "KB",
          validUrl: res[i].status === 200
        };
      }
      return arr;
    })
    .then(res => {
      console.table(res);
      const stats = res.reduce(
        (acc, x) => {
          return {
            ...acc,
            imageCount: ++acc["imageCount"],
            idCount: !!x.id ? ++acc["idCount"] : acc["idCount"],
            absolutePathCount: !!x.isAbsolutePath
              ? ++acc["absolutePathCount"]
              : acc["absolutePathCount"],
            missingSrcPropCount: !x.src
              ? ++acc["missingSrcPropCount"]
              : acc["missingSrcPropCount"],
            missingAltProps: !x.hasAltProp
              ? ++acc["missingAltProps"]
              : acc["missingAltProps"],
            invalidUrlCount: !x.validUrl
              ? ++acc["invalidUrlCount"]
              : acc["invalidUrlCount"],
            pngCount:
              x.imageExtension.indexOf("png") > -1
                ? ++acc["pngCount"]
                : acc["pngCount"],
            jpgCount:
              x.imageExtension.indexOf("jpg") > -1 ||
              x.imageExtension.indexOf("jpeg") > -1
                ? ++acc["jpgCount"]
                : acc["jpgCount"],
            gifCount:
              x.imageExtension.indexOf("gif") > -1
                ? ++acc["gifCount"]
                : acc["gifCount"],
            otherImgCount:
              x.imageExtension !== "jpg" && x.imageExtension !== "png"
                ? ++acc["otherImgCount"]
                : acc["otherImgCount"]
          };
        },
        {
          imageCount: 0,
          absolutePathCount: 0,
          missingSrcPropCount: 0,
          invalidUrlCount: 0,
          idCount: 0,
          missingAltProps: 0,
          pngCount: 0,
          jpgCount: 0,
          gifCount: 0,
          otherImgCount: 0
        }
      );

      console.log("Total images:", stats.imageCount);
      console.log("Total missing src props:", stats.missingSrcPropCount);
      console.log(
        "Total relative paths",
        stats.length - stats.absolutePathCount
      );
      console.log("Total absolute paths", stats.absolutePathCount);
      console.log("Total missing alt props:", stats.missingAltProps);
      console.log("Total invalid URL's:", stats.invalidUrlCount);
      console.log("Total Id's:", stats.idCount);
      console.log("Total PNG images:", stats.pngCount);
      console.log("Total JPG images:", stats.jpgCount);
      console.log("Total GIF images", stats.gifCount);
      console.log("Other image formats:", stats.otherImgCount);
      console.log("Images over x KB size:", null);
    });
}

// 2.) get number of images on web page, check if they contain alt attribute if path is valid DON
/* 
7.) check external links (absolute path)
8.) check internal links (relative path)  
*/
