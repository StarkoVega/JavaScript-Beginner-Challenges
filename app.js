//
//
//
//
//
//
async function postByUser(uid) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
  
  const result = await promise.json();

  const filtered = result.filter(elem => elem.userId === uid)

  console.log(filtered)
}

postByUser(4);
