const animationBar = ["|", "/", "-", "\\", "|", "/", "-", "\\" ];
let iteration = 0;
const interval = setInterval(() => {
  process.stdout.write("\r" + animationBar[iteration]);
  iteration++;
  if (iteration === animationBar.length) {
    clearInterval(interval);
  }
}, 50);