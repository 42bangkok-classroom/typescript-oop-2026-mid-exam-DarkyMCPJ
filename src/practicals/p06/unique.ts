function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  // Write your code below
  const combinedArray = [...arr1, ...arr2];
  const uniqueNumbers = Array.from(new Set(combinedArray));
  return uniqueNumbers;
  
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];