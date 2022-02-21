/*if (1 === "1") {console.log(true);}
else { console.log(false);}

if (1 != "1") {console.log(true);}
else { console.log(false);}

let place = "Manc";
let weather = "Cloudy";

if (place == "Manc" && weather == "Sunny"){console.log("Check again");}
else if (place == "Manc" && weather == "Rain"){console. log("Obvs");}
else {console. log ("What it isn't raining?");}

const grade = 87;
switch (true) {
    case grade >= 70:
        console. log ("Distinction");
        break;
    case grade >= 60:
        console. log ("Merit");
        break;
     case grade >= 50:
            console. log ("Pass");
            break;
        default: 
        console. log("Failed");
}*/

//Activity 1 
/*let age = 17.5;
let country = "Scotland"

if (age >= 18 && country == "UK"){
    console.log("Yes I can serve you")
}
else if ( age >= 18 && country != "UK"){
console.log("I cannot serve you, boss")
} else {
    console.log("Sorry boss i cant serve you ")
}*/

//Activity 2 
/*
let Toppings = "Sausage";

switch(Toppings) {
    case "Sausage":
    case "Pineapple":
        console. log("These are important ingredients for my pizza");
        break;
    case "Pepperoni":
    case "Chicken":
        console. log(`I don't mind having ${Toppings}`);
        break;
    case "Pepper":
     case "Mushroom":
                console. log(`${Toppings} this can not go on pizza!`);
                break;
    default:
        console. log ("This is not a topping");
            
}*/

//Activity 3 
/*
let password = "switchgg";

if(password.length <8) {console. log ("too short");}
else {console. log(`${password}`)}*/

//Activity 4 
/*let num = 1;
if(num % 3 == 0|| num % 5 == 0) {console. log("This is divisable by 3 or 5");}
else { console. log("no!!");}*/


//Activity 5
/*let number = 2;

switch (true) {
    case number % 3 == 0 && number % 5 == 0:
                console.log("fizz buzz")
                break;
    case number % 3 == 0:
        console.log("fizz");
        break;
        case number % 5 == 0:
            console.log("buzz");
            break;
                default:
                    console.log(`${number}`);

}*/

//Activity 6 

/*const IsPalindrome = e => (e+="").split("").reverse().join("") == e;
let num = 000;
if (IsPalindrome(`${num}`) == true){
    console.log("Is a Palindrome")
} else {
    console.log("Is not a Palindrome")
}  */

//Activity 7 
/*let time = "12";
let placeOfWork = "Code Nation";
let townOfHome = "Manchester";
if (time =="7")
{console.log(`i am in bed currently in ${townOfHome}`)}
else if (time == "8")
{console.log(`i am on my way to ${placeOfWork} in ${townOfHome}`)}
else if (time == "9")
{console.log(`i am doing my work in ${placeOfWork} currently in ${townOfHome}`)}
else {console. log ('I am in beddddddd');}*/

// Activity 8
/*
let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let allVowels = "" 
for(let i=0; i < str.length; i++) {
        if(str.charAt(i) == 'a'|| str.charAt(i) == 'e'|| 
            str.charAt(i) == 'i' || str.charAt(i) == 'o' || 
            str.charAt(i) == 'u')
             allVowels = (` the vowel is ${str.charAt(i)} at the index of ${i}`);
        }; 

console.log(allVowels)

*/
// Activity 9

// let word = "scars";
// let lastLetter = word[word.length-1];

// if (word[0] === lastLetter){
//     console.log(true);
// } else {
//     console.log(false);
// }; 
    
// Activity 10

// let num1 = 2;
// let num2 = 3;

// if((num1 + num2) % 2 === 0){ 
//      console.log(`${num1 + num2} `);
//   } else {
//       console.log(`${num1 * num2}`);
//   };
   
