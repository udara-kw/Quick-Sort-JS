function partition(list, low, high) {
  i = low - 1;
  pivot = high;
  for (j = low; j < list.length; j++) {
    if (list[j] < list[pivot]) {
      i = i + 1;
      [list[i], list[j]] = [list[j], list[i]];
    }
  }
  [list[i + 1], list[pivot]] = [list[pivot], list[i + 1]];
  return i + 1;
}

function quickSort(list, low, high) {
  if (low < high) {
    pivot = partition(list, low, high);
    quickSort(list, low, pivot - 1);
    quickSort(list, pivot + 1, high);
  }
}

testList = [10, 34, 21, -3, 0, 44, 987, "67", -42, 65, 8, 9];
quickSort(testList, 0, testList.length - 1);
console.log(testList);
