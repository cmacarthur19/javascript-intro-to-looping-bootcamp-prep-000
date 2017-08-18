function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loops.`);
  }
  }
  return array;
}

let n = 100

function whileLoop(n) {
  while (n > 0) {
    if (n === 0) {
      console.log("done");
    } else {
      console.log(--n);
    }
  } return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue());
  return array;
}
