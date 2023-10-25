// Question 1:


// 1. Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.


// console.log(ucFirstLetters("los angeles") ) //Los Angeles

function ucFirstLetters(str) 
{
    str = str.split(" ");

    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(ucFirstLetters("Los Angelas"));
console.log(ucFirstLetters("Baton Rouge"));
console.log(ucFirstLetters("San Diego"));
console.log(ucFirstLetters("Dean Rials"));
console.log(ucFirstLetters("New Orleans Saints"));
