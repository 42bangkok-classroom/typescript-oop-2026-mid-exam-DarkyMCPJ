export function getUniqueNumbers(array1: number[], array2: number[]): number[] {
  // Write your code below
  const unique1 = array1.filter(x => array2.indexOf(x) == -1);

  const unique2 = array2.filter(x => array1.indexOf(x) == -1);

  const merge = unique1.concat(unique2);

  const duplicate = merge.filter((a, b) => merge.indexOf(a) !== b && merge.lastIndexOf(a) === b);

  const noDuplicate = merge.filter(x => duplicate.indexOf(x) == -1);

  return noDuplicate;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];