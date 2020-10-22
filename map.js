const mneumonics = ['My Very Excellent Mother Just Sent Me Nine Pizzas', 'Please Excuse My Dear Aunt Sally', 'Every Good Boy Does Fine'];


split = (mneu) => {
   return [mneu];
}

let x = mneumonics.map(split);

console.log(x)
// Write some code using map that takes the above array of mneumonics, and returns a two dimensional array.
// For example, the 0th element of the new array should be:
// ['My', 'Very', 'Excellent', 'Mother', 'Just', 'Sent', 'Me', 'Nine', 'Pizzas']

// Your code here!


const phoneBook = [
    { Abe: "111-111-1111" },
    { Bob: "222-222-2222" },
    { Cam: "333-333-3333" },
    { Dan: "444-444-4444" },
    { Ern: "555-555-5555" },
    { Fry: "111-111-1111" },
    { Gil: "222-222-2222" },
    { Hal: "333-333-3333" },
    { Ike: "444-444-4444" },
    { Jim: "555-555-5555" },
    { Kip: "111-111-1111" },
    { Liv: "222-222-2222" },
    { Mia: "333-333-3333" },
    { Nik: "444-444-4444" },
    { Oli: "555-555-5555" },
    { Pam: "111-111-1111" },
    { Qiq: "222-222-2222" },
    { Rob: "333-333-3333" },
    { Stu: "444-444-4444" },
    { Tad: "555-555-5555" },
    { Uwe: "111-111-1111" },
    { Val: "222-222-2222" },
    { Wil: "333-333-3333" },
    { Xiu: "444-444-4444" },
    { Yam: "555-555-5555" },
    { Zed: "111-111-1111" }
   ];

 // Take the phonebook above and use map to return a new phonebook that includes a country-code that matches the rest of the phone number.
 // For example, the 0th element of the new array should be { Abe: "1-111-111-1111" }

 //Your code here

 addCountryCode = (entry) => {
    let newEntry = {};
    let key = Object.keys(entry)[0];
    newEntry[key] = `1-${entry[key]}`;
    return newEntry;


 }

let newPhoneBook = phoneBook.map(addCountryCode);

console.log(newPhoneBook)

