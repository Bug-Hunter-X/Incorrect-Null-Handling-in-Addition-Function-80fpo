# Incorrect Null Handling in Addition Function
This repository demonstrates a common error in JavaScript: incorrect handling of null values.
The `foo` function is designed to add two numbers. However, it incorrectly handles null values, returning 0 instead of throwing an error or handling the null values appropriately.
The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected version.
## Bug
The original code returns 0 if either input is null. This is not always appropriate.  A more robust solution would either throw an error or use a default value. 
## Solution
The solution demonstrates how to handle null values more appropriately.  This example uses a default value of 0 if either input is null.