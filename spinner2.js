const toBePrinted = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
for (const index in toBePrinted) {
  setTimeout( () => process.stdout.write(toBePrinted[index]), 100 + index * 200)
};
setTimeout( () => console.log(), toBePrinted.length * 200 + 100)