/*let coffeOrder = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - WhatEver's New"
];
coffeOrder[1] = "Anna - Vanilla Latte";
coffeOrder.push("Donna - espresso"); adds a line
coffeOrder.pop (); removes last one 

console. log (coffeOrder);
//console. log (coffeOrder.length);*/

//Activity 1

/*let favSongs = [
    "Brent Fayiaz - Trust",
    "Red Rat - Tight Up Skirt",
    "Wayne Wonder - No letting Go",
];
favSongs.push ("Cheeky Girls - we are the cheeky girls", "Drake - Yeah");
favSongs.pop ();
favSongs.shift();
console. log(favSongs);*/


/*let favDrinks = [
    "coke",
    "mango",
    "fanta",
];

for(let i = 0; i < favDrinks.length; i++){console.log(favDrinks[i]);}*/

/*let multiplesTwo = [];
for (let i = 0; i < 21; i++){
    if (i % 2 == 0) {multiplesTwo.push(i);}
}
console.log(`Numbers divisable by 2 between 0 and 20 are: ${multiplesTwo}`)*/

/*let age = 15;
while(age < 18){console.log("you're a child!");age++;}
console.log("you're an Adult");*/

/*let cards = ["diamonds","spade","clubs","heart"];
let currentCards = "clubs";
while(currentCards != "spade"){
    console.log(currentCards);
    currentCards = cards[Math.floor(Math.floor(Math.random()*4))];
}
console. log(currentCards);*/

//Activity 1 
/*let favFilms = ["film1","film2","film3","film4","film5"];
favFilms.push ("film6","film7");

for ( i = 0; i < favFilms.length; i++) {
    console. log (favFilms[i]);

}*/
//Activity 2 
/*let arrayLength = 6;
let randomNums = [];
for (let i = 0; i < arrayLength; i++){
randomNums = Math.floor(Math.random() * 50 ) + 1;
console.log(randomNums)};*/

//Activty 3 
/*let Num = [0,1,2,3,4,5,6,7,8,9];
let reverseNum = Num.reverse();
for (let i = 0; i <Num.length; i++) {
    
    console. log (reverseNum[i]);
}*/

//Activty 4
/*let arr = ["film1", "film2","Ghostbusters", "film4"];
 for (i = 0; i < arr.length; i++){
     console.log(arr[i]);
 }
    if(arr[2] === "Ghostbusters"){
        console.log("Yey!");
    } else {
        console.log("Boo!");
    };*/

//Activity 5 
/*let arr5 = [];
let arr5length = 6;

for (i = 0; i < arr5length; i++){
   arr5 = Math.floor(Math.random() * 30) + 1
   if (arr5 % 7 === 0){
       console.log(`${arr5} is divisible by 7`)

   } else {
       console.log(`${arr5} is not divisible by 7`)
   }

}*/

// Activity 6 



let arr1 = ["Bob", "Charlie", "Cherrelle", "Bill"];
let arr2 = ["Bob", "Rhys", "Charlie", "Ben"];
let matchName = arr1.filter(x => arr2.includes(x));
for(let each of matchName){
console.log(each)};




 let arr1 = ["Bob", "Charlie", "Cherrelle", "Bill"];
 let arr2 = ["Bob", "Rhys", "Charlie", "Ben"];
 for (i = 0; i < arr1.length; i++){
     let matchName = arr1.filter(x => arr2.includes(x));
     console.log(matchName[i]);
 };
