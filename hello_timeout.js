// setTimeout(() => {
//   console.log("4311o");
// }, 1000);

// setTimeout(() => {
//   console.log("th3r3");
// }, 2000);

// setTimeout(() => {
//   console.log("w0r1d");
// }, 3000);

// OR

setTimeout(() => {
  process.stdout.write("4311o ");
  setTimeout(() => {
    process.stdout.write("th3r3 ");
    setTimeout(() => {
      process.stdout.write("w0r1d");
    }, 1000);
  }, 1000);
}, 1000);


