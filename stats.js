// get all ID names
var result_array = [];
var array = document.querySelectorAll("*[id]");
for (var i = 0; i < array.length; i++) {
  result_array.push(array[i].getAttribute("id"));
}
console.table(result_array);

// get all SVGs
var array = document.getElementsByTagName("svg");
for (var item of array) {
  console.log(item);
}

// get all duplicate IDs
function findDuplicateIds() {
  var result_array = [];
  var array = document.querySelectorAll("*[id]");
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i].getAttribute("id") == array[j].getAttribute("id")) {
        var obj = {
          first: array[i],
          first_index: i,
          second: array[j],
          second_index: j
        };
        console.log(array[i]);
        console.log(array[j]);
        result_array.push(obj);
      }
    }
  }
  result_array.length !== 0
    ? console.log(result_array)
    : console.log("No duplicate values found!");
}
findDuplicateIds();

// getNonExisting links:
function linkStats() {
  var links = document.getElementsByTagName("a");
  console.log("Application name:", document.title);
  console.log("Amount of links: " + links.length);
  console.log("");

  for (var i = 0; i < links.length; i++) {
    if (links[i].href === "") {
      console.log("No link for: ", links[i].innerHTML);
      console.log("Element: ", links[i]);
      console.log("-------------");
    }
  }
}
linkStats();

// getImage statistics, check valid alt tag and check if src is valid
function getImageStats() {
  let imgArr = document.getElementsByTagName("img");
  let arr = [];

  let obj = {
    htmlImage: null,
    hasId: false,
    imageExtension: null,
    hasAltProp: false,
    dimensionXY: 0,
    src: false,
    absoluteUrL: false,
    validUrl: false,
    serverSize: 0
  };

  for (let i = 0; i < imgArr.length; i++) {
    const extensionArr = imgArr[i].src.split(".");
    obj = {
      ...obj,
      src: imgArr[i].src,
      absoluteUrL: imgArr[i].src.indexOf("http") > -1,
      imageExtension: extensionArr[extensionArr.length - 1],
      serverSize: null,
      htmlImage: imgArr[i],
      hasId: !!imgArr[i].id,
      hasAltProp: !!imgArr[i].alt,
      dimensionXY: imgArr[i].width * imgArr[i].height
    };
    arr.push(obj);
  }

  Promise.all(arr.map(x => window.fetch(x.src).catch(x => Promise.resolve())))
    .then(res => {
      for (let i = 0; i < res.length; i++) {
        arr[i].validUrl = res[i] && res[i].status === 200 ? true : null;
      }
      return arr;
    })
    .then(res => {
      console.table(res);
      console.log("Total images", res.length);
      console.log("Total missing alt props:", res.map(x => !x.alt).length);
      console.log("Total absolute url's:", res.map(x => x.absoluteUrl).length);
      console.log(
        "Total PNG extension:",
        res.map(x => x.imageExtension === "png").length
      );
      console.log(
        "Total JPG extension:",
        res.map(x => x.imageExtension === "jpg").length
      );
      console.log(
        "Total other image extension:",
        res.map(x => x.imageExtension !== "jpg" && x.imageExtension !== "png")
          .length
      );
      console.log("Total image size over x KB", res.map(x => x).length);
    });
}

getImageStats();

// check if undefined, null, NaN is displayed in the browser
function checkForHtmlString(string, index, cnt) {
  var currentIndex = document.body.innerHTML.indexOf(string, index);
  if (currentIndex <= 0) {
    return cnt;
  }
  return checkForHtmlString(string, ++currentIndex, ++cnt);
}
console.log("Amount found: ", checkForHtmlString(NaN, 0, 0));
console.log("Amount found: ", checkForHtmlString("undefined", 0, 0));
console.log("Amount found: ", checkForHtmlString("null", 0, 0));
