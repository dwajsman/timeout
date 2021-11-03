const sentence = "hello there from lighthouse labs";

// iteration outside
let iteration = 0;
// create a handle
const interval = setInterval(() => {
  
  
  process.stdout.write(sentence[iteration]);

  iteration++;
  if (iteration === sentence.length) {
    console.log("\n");
  }
  // once iteration gets to 10 we clear the interval using the handle
  if (iteration === sentence.length) {
    clearInterval(interval);
  }
  
}, 50);

// == === == === ==











// char.forEach(letter => {
//   setTimeout(() => {
//     process.stdout.write(letter);
//   }, 1000);
// });