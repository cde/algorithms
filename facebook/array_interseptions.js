function intersections(array1, array2) {
  array1.sort((a, b) => a - b) // assume sorted
  array2.sort((a, b) => a - b) // assume sorted

  const intersections = []
  let l = 0, r = 0;
  while ((array2[l] && array1[r]) !== undefined) {
    const left = array1[r], right = array2[l];
    if (right === left) {
      intersections.push(right)
      while (left === array1[r]) r++;
      while (right === array2[l]) l++;
      continue;
  }
  if (right > left) while (left === array1[r]) r++;
    else while (right === array2[l]) l++;
  }
  return intersections;
  }
let arr1 = [ 1, 1, 3, 5, 9]
let arr2 = [ 1, 2, 3, 5, 8, 9 ]

console.log(intersections(arr1,arr2));