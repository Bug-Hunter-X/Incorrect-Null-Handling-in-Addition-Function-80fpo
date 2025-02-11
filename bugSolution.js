function foo(a, b) {
  a = a === null ? 0 : a; //Handle null values by defaulting to 0
  b = b === null ? 0 : b; //Handle null values by defaulting to 0
  return a + b;
}
console.log(foo(1, null)); //outputs 1
console.log(foo(null, 1)); //outputs 1
console.log(foo(1,2)); //outputs 3