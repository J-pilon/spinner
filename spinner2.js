let timer = 100;
const arr = ['\r|', '\r/', '\r-', '\r\\', '\r|']

for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    process.stdout.write(arr[i]);
  }, timer += 200);
}
