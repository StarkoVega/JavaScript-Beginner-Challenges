//
//
//
//
//
//
function arrSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i];
  }

  return sum;
}

console.log(arrSum([0, 3, 5, 10]));
