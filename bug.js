function foo(a, b) {
  if (a === null || b === null) {
    return 0; //Incorrect Handling of null values
  }
  return a + b;
}
console.log(foo(1, null)); //outputs 0
console.log(foo(null, 1)); //outputs 0
console.log(foo(1,2)); //outputs 3