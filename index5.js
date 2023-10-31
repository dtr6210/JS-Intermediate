// Question 5:

// 5. Decimal number operations in JavaScript can lead to unexpected results, as in the
// following:

let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// 0.2 + 0.1 = 0.30000000000000004

// We can sometimes avoid this using the toFixed function to force the number of decimal
// places as below, but it’s not always useful:

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen); //why is this not working?

// a) Explain why the above code returns the wrong answer

// it is reading the result as a string so instead of getting the numberic value we are getting 0.200.10 ('0.20' + '0.10')

// b) Create a function currencyAddition(float1, float2) which safely adds the two
// decimal numbers float1 and float2 and returns the correct float result.

function currencyAddition(float1, float2) {
  return (float1 + float2).toFixed(2);
}

// c) Create a function currencyOperation(float1, float2, operation) which
// safely performs the given operation (either +, -, / or *) on the two numbers and returns
// the correct float result. https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Statements/switch may be useful.

function currencyOperation(float1, float2, operation) {
  switch (operation) {
    case "+":
      return (float1 + float2).toFixed(2);
      break;
    case "-":
      return (float1 - float2).toFixed(2);
      break;
    case "/":
      return (float1 / float2).toFixed(2);
      break;
    case "*":
      return (float1 * float2).toFixed(2);
      break;
    default:
      return "This is not one of the operators";
  }
}

// d) (Extension) Extend the above function to include a fourth argument numDecimals
// which allows the operation to support different amounts of decimal places from 1 to 10.

function currencyOperation2(float1, float2, operation, numDecimals) {
  switch (operation) {
    case "+":
      return (float1 + float2).toFixed(numDecimals);
      break;
    case "-":
      return (float1 - float2).toFixed(numDecimals);
      break;
    case "/":
      return (float1 / float2).toFixed(numDecimals);
      break;
    case "*":
      return (float1 * float2).toFixed(numDecimals);
      break;
    default:
      return "This is not one of the operators";
  }
}

// HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
// different values as well as the below:

console.log(0.3 == currencyAddition(0.1, 0.2)); // true
console.log(0.3 == currencyOperation(0.1, 0.2, "+")); // true

console.log(currencyOperation(0.6, 0.8, "+"));
console.log(currencyOperation(0.6, 0.8, "*"));

console.log(currencyOperation2(0.6, 0.8, "*", 5));
