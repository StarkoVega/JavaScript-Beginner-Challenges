//
//
//
//
//
//
function isLoggedInAndSubscribed(log, sub) {
  return log === "LOGGED_IN" || sub === "SUBSCRIBED";
}

console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));
