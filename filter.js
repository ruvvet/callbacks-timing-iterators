const people = [
	{
		name: "Bob",
		coolnessScore: 23
	},
	{
		name: "Jen",
		coolnessScore: 40
	},
	{
		name: "James",
		coolnessScore: 15.6
	},
	{
		name: "Isolde",
		coolnessScore: 17
	}
];

// (1) Write code that uses the filter function, and the below isCool function to return a list of people who are cool.

const isCool = function(person) {
    return person.coolnessScore > 20;
}

let coolPeople = people.filter(isCool);

console.log(coolPeople)

// Your code goes here



const misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]

// Use filter to filter all strings out of the above array.
// Don't worry about strings in the nested array (misc[5] is considered an array, not a string)

// Your code goes here

noStrings = (ele) =>{
	if (typeof ele !=='string'){
		return ele;
	}
	else{

	}
}

let newString = misc.filter(noStrings);
console.log(newString)