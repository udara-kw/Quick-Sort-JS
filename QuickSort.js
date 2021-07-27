function quickSort(list, low, high) {
  if (low < high) {
    pivot = partition(list, low, high);
    quickSort(list, low, pivot - 1);
    quickSort(list, pivot + 1, high);
  }
}
