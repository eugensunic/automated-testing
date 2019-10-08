// get all ID names
var result_array = [];
var array = document.querySelectorAll('*[id]');
for (var i = 0; i < array.length; i++) {
  result_array.push(array[i].getAttribute('id'));
}
console.table(result_array);

// get all SVGs
var array = document.getElementsByTagName('svg');
for (var item of array) {
  console.log(item);
}

// get all duplicate IDs
function findDuplicateIds() {
  var result_array = [];
  var array = document.querySelectorAll('*[id]');
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i].getAttribute('id') == array[j].getAttribute('id')) {
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
  result_array.length !== 0 ? console.log(result_array) : console.log('No duplicate values found!');
}
findDuplicateIds();

// getNonExisting links:
function linkStats() {
  var links = document.getElementsByTagName('a');
  console.log('Application name:', document.title);
  console.log('Amount of links: ' + links.length);
  console.log('');

  for (var i = 0; i < links.length; i++) {
    if (links[i].href === '') {
      console.log('No link for: ', links[i].innerHTML);
      console.log('Element: ', links[i]);
      console.log('-------------');
    }
  }
}
linkStats();

// getImage statistics
function getImageStats() {
  var imgElements = document.getElementsByTagName('img');
  console.log('Amount of images: ' + imgElements.length);
  console.log('App name: ' + document.title);
  for (var i = 0; i < imgElements.length; i++) {
    console.log(imgElements[i]);
  }
  for (var i = 0; i < imgElements.length; i++) {
    if (imgElements[i].alt === undefined || imgElements[i].alt === null) {
      console.log('Does not contain alt tag:');
      console.log(imgElements[i]);
    }
  }
}
getImageStats();

// check if undefined or null is displayed in the browser
function checkUndefinedOrNull() {
  var allTags = document.getElementsByTagName('*');
  var checked = true;
  for (var i = 0; i < allTags; i++) {
    if (allTags[i].innerHTML === undefined || imgElements[i].innerHTML === null) {
      checked = false;
      console.log('Contains null or undefined: ');
      console.log(allTags[i]);
    }
  }
  if (checked) {
    return 'Everything OK!';
  }
}
checkUndefinedOrNull();
