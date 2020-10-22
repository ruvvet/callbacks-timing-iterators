// (1) Use the .forEach iterator to loop over the following array of foods and say you like them.

// The output should be
// > "I like pizza"
// > "I like tacos"
// > "I like ice cream"

const foods = ["pizza", "tacos", "ice cream", "sushi"];

iLikeStuff= (food)=>{
    console.log(`I like ${food}`);
}

let foodlist = foods.forEach(iLikeStuff);


// your code here



// Use the .forEach iterator to loop over the following array of objects and say how delicious each one is.
// The output should be
// > Pizza is very delicious
// > Tacos is mostly delicious
// > Cottage Cheese is not very delicious

 var foods2 = [
  {name: "Pizza", level: "very"},
  {name: "Tacos", level: "mostly"},
  {name: "Cottage Cheese", level: "not very"}
];

// your code here

iLikeEating = (ele) =>{
    console.log(`${ele.name} is ${ele.level} delicious`);

}


let newfoodlist = foods2.forEach(iLikeEating);