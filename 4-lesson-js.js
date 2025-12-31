const array = [1,[2,3],[4,5]]; 

array.flat();

// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array2 = [[1],[2],[3],[[[4]]],[[[5]]]];
array2.flat(2);


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const newArray = [];
for (let i=0; i < greeting.length; i++) {
	newArray.push(greeting[i].join(" "));
}
newArray.flat();

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
greeting.toString().replace(/[^a-zA-Z0-9\s]/g, " ");


//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
trapped.flat(50);



//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
console.log(userEmail3.trimStart().trimEnd());


//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
const newArrray = Object.entries(users);

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
function isNumber(value) {
  return typeof value === 'number';
}

const newer = newArrray.map((user)	 => {
	return [user[0], user[1] * 2]; //user = [item with ind 0, item with ind 1], update ind 1 item
})

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
const obj11 = Object.fromEntries(newer);
console.log(obj11);

////////////
// const basket = ["apple", "orange", "grapes", "banana"];
// const objBasket = {
// 	apples: 5,
// 	oranges: 4,
// 	grapes: 1,
// 	banana: 2,
// };

// for (let i=0; i < basket.length; i++) {
// 	console.log(basket[i]);
// }

// basket.forEach((item) => {
// 	console.log(item);
// })

// // for of, works for arrays and strings
// // we are iterating
// for (item of basket) {
// 	console.log('for of', item)
// }

// // for if, works in obj
// // enumerating, bc we see properties
// for (item in objBasket) {
// 	console.log('for if', item);
// }

const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
	let bigNum = 0;
	for (let i=0; i < arr.length; i++) {
		if (bigNum < arr[i]) {
			bigNum = arr[i];
		}
	} 
	return bigNum;
}

function biggestNumberInArray2(arr) {
	let bigNum = 0;
	arr.forEach(num => {
		if (bigNum < num) {
			bigNum = num;
		}
	})
	return bigNum;
}

function biggestNumberInArray3(arr) {
	let bigNum = 0;
	for (item of arr) {
		if (bigNum < item) {
			bigNum = item;
		}
	}
	return bigNum;
}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
	let found = false;
	for (item in basket) {
		if (lookingFor === item) {
			found = true;
			return `${lookingFor} is in the basket.`
	}
}if (found != true) {
	console.log("Nothing was found.")
}}

// ECMAScript 2020

typeof Number.MAX_SAFE_INTEGER;

//bigint and number

//optional chaining operator
let will13 = {
	pikachu : {
		species: "mouse pokemon",
		height: 0.42,
		weight: 6,
	}
}

let lavrik = {
	raichu : {
		species: "mouse pokemon",
		height: 0.56,
		weight: 8,
		power: '' //empty string means false
	}
}

let weight = will13.pikachu.weight;
console.log(weight);

//old way
if (lavrik.pikachu && lavrik.pikachu.weight) {
	let weight2 = lavrik.pikachu.weight;
} else {
	let weight2 = undefined;
}

//?. is there pikachu in obj

let weight3 = lavrik?.pikachu?.weight
console.log(weight3)
// ?? checks if its null or undefined, we could use || but it would return no power, no matter that power is ''
let power = lavrik?.pikachu?.weight ?? 'no power'
console.log(weight3)

// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER) // the same as max just with minus

// Exercise 2: why does this throw an error? How can you fix it?
3n + 4n + 1n //add n

// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

if (andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard) {
        console.log('fight!')
    } else {
        console.log('walk away...')
    }


// Exercise 4: What do these each output?
console.log(false ?? 'hellooo') //false
console.log(null ?? 'hellooo') //hellooo
console.log(null || 'hellooo') //hellooo
console.log((false || null) ?? 'hellooo') //hellooo
console.log(null ?? (false || 'hellooo')) //hellooo

// ES2021
//replaceAll, replaces ALL
const str = "I am the best! Yes, I am the best!";
const b = str.replaceAll("best", "worst")

//replace, replaces only first instance
const c = str.replace("best", "worst")

// ES2022
const numArray = [1, 10, 200, 500, 10000, 0];

numArray[numArray.length - 2];

numArray.at(-3);

//exercise
const ztmMonsters = [
{id: 1, monster: 'Mr. Mouse', level: 1},
{id: 2, monster: 'Mac', level: 30},
{id: 3, monster: 'Denodude', level: 17},
{id: 4, monster: 'Pye', level: 5},
];

// Old Way
const advancedMonsters = ztmMonsters.filter(item => item.level > 15)
console.log(advancedMonsters)
console.log(advancedMonsters[advancedMonsters.length - 1])


// Using findLast()
const lastMonster = ztmMonsters.findLast(item => item.level > 15);
console.log(lastMonster);
// Using findLastIndex()
const lastMonsterIndex = ztmMonsters.findLastIndex(item => item.level > 15);
console.log(lastMonsterIndex);


const ztmMonstersList = ['Mr. Mouse', 'Mac', 'Denodude', 'Pye'];

//Using reverse()
const reverseMonsters = ztmMonstersList.reverse();
console.log(ztmMonstersList) 
console.log(reverseMonsters) 

//using toReversed()
const reversedMonstersTo = ztmMonstersList.toReversed();
console.log(ztmMonstersList) 
console.log(reversedMonstersTo)

//Using toSorted()
const sortedMonstersTo = ztmMonstersList.toSorted();
console.log(ztmMonstersList) 
console.log(sortedMonstersTo)

//Using toSpliced()
const spliceMonstersTo = ztmMonstersList.toSpliced(2, 1);
console.log(ztmMonstersList) 
console.log(spliceMonstersTo)

//Old Way
ztmMonstersList[1] = 'Gost';
console.log(ztmMonstersList)

// Using with()
const withMonsters = ztmMonstersList.with(1, 'Gost');
console.log(ztmMonstersList) 
console.log(withMonsters)

// ES2024
const pokemons = [
  { name: "bulbasaur", type: "grass"},
  { name: "blastoise", type: "water"},
  { name: "charmander",  type: "fire"},
  { name: "ivysaur", type: "grass"},
  { name: "charmeleon",  type: "fire"},
  { name: "charizard",  type: "fire"},
  { name: "squirtle", type: "water"},
  { name: "venusaur", type: "grass"},
  { name: "wartortle", type: "water"},
  { name: "pikachu", type: "electric"}
]


Object.groupBy(pokemons, (i) => {
    return i.type;
})

Object.groupBy(pokemons, (i) => {
    return i.name;
})