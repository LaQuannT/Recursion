const merge = (left, right) => {
  const mergedArray = [];
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      mergedArray.push(left[i]);
      i++;
    } else {
      mergedArray.push(right[j]);
      j++;
    }
  }
  for (i; i < left.length; i++) {
    mergedArray.push(left[i]);
  }
  for (j; j < right.length; j++) {
    mergedArray.push(right[j]);
  }
  return mergedArray;
};

const mergeSort = (array) => {
  if (array.length <= 1) return array;
  let middle = Math.floor(array.length / 2);
  return merge(
    mergeSort(array.slice(0, middle)),
    mergeSort(array.slice(middle))
  );
};

console.log(...mergeSort([2, 4, 7, 9, 3, 5, 10, 12]));
console.log(...mergeSort([9, 3, 5, 2, 4, 7, 10, 12]));
console.log(...mergeSort([2, 4, 3, 5, 10, 12, 7, 9]));
