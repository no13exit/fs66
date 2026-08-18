function bubbleSort(arr) {
  let len = arr.length;
  let readyFlag = false;

  for (let i = 0; i < len; i++) {
    readyFlag = true;

    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        readyFlag = false;
      }
    }
    if (readyFlag === true) {
      break;
    }
  }

  return arr;
}

let list = [1, 5, 3, 9, 123, 345, 123124, 245];
res = bubbleSort(list);
console.log(res);

function search(number, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      return i;
    }
  }
  return -1;
}

test = search(1233456, res);
console.log(test);
