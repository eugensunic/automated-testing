function getAllIds() {
  const result_array = [];
  const array = document.querySelectorAll("*[id]");
  for (var i = 0; i < array.length; i++) {
    result_array.push(array[i].getAttribute("id"));
  }
  console.table(result_array);
}

function findDuplicateIds() {
  const duplicateArray = [];
  const idArray = document.querySelectorAll("*[id]");
  for (let i = 0; i < idArray.length; i++) {
    for (let j = i + 1; j < idArray.length; j++) {
      if (idArray[i].getAttribute("id") === idArray[j].getAttribute("id")) {
        const obj = {
          first: idArray[i],
          firstIndex: i,
          second: idArray[j],
          secondIndex: j
        };

        duplicateArray.push(obj);
      }
    }
  }
  return !!duplicateArray.length ? duplicateArray : "No duplicates found";
}

