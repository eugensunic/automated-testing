function getAmountOfSvgElements() {
  const idArray = document.getElementsByTagName("svg");
  const arr = [];
  for (const item of idArray) {
    arr.push(item);
  }
  return arr;
}
