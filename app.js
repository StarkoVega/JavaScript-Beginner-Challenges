//
//
//
//
//
//
function showRating(num) {
  let integer = Math.floor(num);
  let rating = "";
  for (let i = 0; i < integer; ++i) {
    rating += "*";
    if (i !== integer - 1) {
      rating += " ";
    }
  }
  if (num % 1 !== 0) {
    rating += " .";
  }
  return rating;
}

console.log(showRating(4));
