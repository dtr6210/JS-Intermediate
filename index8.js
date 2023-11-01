// Question 8:

// 8. The following code creates a new Map object for storing names beginning with A, B, or C
// with their phone numbers.

const phoneBookABC = new Map(); //an empty map to begin with

phoneBookABC.set('Annabelle', '0412312343');
phoneBookABC.set('Barry', '0433221117');
phoneBookABC.set('Caroline', '0455221182');


// a) Create a new phoneBookDEF Map to store names beginning with D, E or F

const phoneBookDEF = new Map();

// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values

phoneBookDEF.set('Dean', '5555551111');
phoneBookDEF.set('Elaine', '5555551112');
phoneBookDEF.set('Fernando', '5555551113');

// c) Update the phone number for Caroline

phoneBookABC.set('Caroline', '5555551114');

// d) Write a function printPhoneBook(contacts) that prints the names and phone
// numbers in the given Map

function printPhoneBook(contacts) {
    contacts.forEach((contact, pnumber) => {
        console.log(`${pnumber}: ${contact}`)
    })
}

// e) Combine the contents of the two individual Maps into a single phoneBook Map

const merged = new Map([...phoneBookABC,...phoneBookDEF]);

// f) Print out the full list of names in the combined phone book

console.log(printPhoneBook(merged))


// console.log(phoneBookABC)
// console.log(printPhoneBook(phoneBookABC))
// console.log(printPhoneBook(phoneBookDEF))

