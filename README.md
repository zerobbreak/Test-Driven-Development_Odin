# Assignment README

## Overview

This assignment involves writing tests for and implementing several JavaScript functions as specified below. The goal is to ensure the correctness and reliability of the functions through testing and subsequent implementation.

### Functions to Implement:

1. **capitalize:**
   - Description: Takes a string and returns it with the first character capitalized.
   
2. **reverseString:**
   - Description: Takes a string and returns it reversed.

3. **calculator:**
   - Description: Contains functions for basic operations (add, subtract, divide, multiply). Each function should take two numbers and return the correct calculation.

4. **caesarCipher:**
   - Description: Takes a string and a shift factor, and returns it with each character “shifted” according to the Caesar cipher. Ensure to test wrapping from 'z' to 'a', keeping the same case, and handling punctuation.

5. **analyzeArray:**
   - Description: Takes an array of numbers and returns an object with the following properties: average, min, max, and length.

### Testing Considerations:

- For each function, comprehensive tests should be written and executed to ensure the correctness of the implementation.
  
- The Caesar cipher function may be split into smaller helper functions. Tests for the public function should suffice if it works as expected, as per the testing instructions.

### Test Cases:

- **capitalize:**
  ```javascript
  capitalize("hello") // Should return "Hello"
  capitalize("world") // Should return "World"
  capitalize("123abc") // Should return "123abc"
  ```

- **reverseString:**
  ```javascript
  reverseString("hello") // Should return "olleh"
  reverseString("world") // Should return "dlrow"
  ```

- **calculator:**
  ```javascript
  calculator.add(2, 3) // Should return 5
  calculator.subtract(5, 3) // Should return 2
  calculator.multiply(4, 6) // Should return 24
  calculator.divide(8, 2) // Should return 4
  ```

- **caesarCipher:**
  ```javascript
  caesarCipher("Hello, World!", 3) // Should return "Khoor, Zruog!"
  ```

- **analyzeArray:**
  ```javascript
  analyzeArray([1, 8, 3, 4, 2, 6]) // Should return { average: 4, min: 1, max: 8, length: 6 }
  ```

## Getting Started

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Running Tests

Execute the following command to run the tests:

```bash
npm test
```

## Implementation

- Implement each function in the corresponding file (e.g., `capitalize.js`, `reverseString.js`, etc.).
- Ensure that the tests pass after implementing each function.

## Submission

Upon completion, submit the updated code with the implemented functions and tests for review. Ensure that all tests pass successfully.