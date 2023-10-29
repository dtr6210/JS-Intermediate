// Question 4:

// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.

// The function should remove all dashes, and uppercase the first letter of each word after a
// dash.

// b) Create variants of the camelCase function that use different types of for loops, and

// c) with and without the conditional operator



function camelCase(cssProp) {
  let str = cssProp.split("-");
  for (i = 1; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substring(1);
  }
  return str.join("");
}

console.log(camelCase("margin-left"));
console.log(camelCase("background-image"));
console.log(camelCase("display"));
