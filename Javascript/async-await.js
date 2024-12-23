// async function getData() {
//     //simulate getting data from a server
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 2000);
//   });
// }

async function getData() {
  //simulate getting data from a server

  let x = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));
  let data = await (await x).json();
  console.log(data)
}

console.log("working");
async function main() {
  console.log("loading modules");
  console.log("do something else");
  console.log("load data");
  await getData();
  console.log("next task");
}
main();
// data.then((v) => {
//   console.log(data);
//   console.log("ready");
//   console.log("ready for next task")
// });
