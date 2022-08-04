//
//
//
//
//
//
function getMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; ++i) {
    max = max > arr[i] ? max : arr[i];
  }
  return max
}
console.log(getMax([-200, -100, -300]));
