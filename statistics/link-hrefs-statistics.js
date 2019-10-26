function getLinkStats(rejectCorsErr) {
  let linkArr = document.getElementsByTagName("a");
  let arr = [];

  let obj = {
    href: null,
    hasHrefProp: null,
    isAbsolutePath: null,
    targetBlank: null,
    validUrl: null
  };

  for (let i = 0; i < linkArr.length; i++) {
    obj = {
      ...obj,
      hasHrefProp: !!linkArr[i].href,
      href: linkArr[i].href,
      isAbsolutePath: !!linkArr[i].href
        ? /^https?:\/\//i.test(linkArr[i].getAttribute("href"))
        : null,
      targetBlank: linkArr[i].target.indexOf("blank") > -1,
      validUrl: null
    };
    arr.push(obj);
  }

  Promise.all(
    arr.map(x => {
      return fetch(x.href, { mode: rejectCorsErr ? "no-cors" : "cors" })
        .then(res => {
          if (res.status >= 400) throw new Error("err");
          return { ...x, validUrl: true };
        })
        .catch(_ => ({ ...x, validUrl: false }));
    })
  ).then(result => console.table(result));
}

/* 
3.) get non existing href's of a tags, get amount of links on page
7.) check external links (absolute path)
8.) check internal links (relative path) 
9.) check if existing links are valid
11.) check dead links/valid links
*/
