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


// 1.) check if undefined/null/NaN is displayed in the browser DONE