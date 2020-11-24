function binarySearch(array, k) {
  return binarySearchHelper(array, k, 0, array.length - 1);
}


function binarySearchHelper(arr, k, start, end) {
  if(start > end) {
    return -1 * (start);
  }

  const mid = parseInt((start + end) / 2);
  if(arr[mid] > k) {
    return binarySearchHelper(arr, k, start, mid - 1);
  } else if(arr[mid] < k) {
    return binarySearchHelper(arr, k, mid+1, end);
  } else {
    return mid;
  }
}

console.log(binarySearch([1,2,3,4,5,6,7], 5.7));
