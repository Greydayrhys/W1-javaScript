/*const GrindingBeans = () => { console. log ("Grinding for 20 seconds");}
GrindingBeans();*/


/*let coffeeisgrinding = false;
const GrindingBeans = () => {
    if (coffeeisgrinding){console.log ("stop the grinding");
coffeeisgrinding = true;}
else (coffeeisgrinding){console. log ("Start grinding");
coffeeisgrinding = false;}
}*/

/*let accnum = 5012313;
const CashWithdrawal = (account, accnum) => 
{console. log(`Withdrawing ${account} from ${accnum}`)};

CashWithdrawal ();

const addUp = ( num1, num2) => {
    return num1 + num2;

addUp (7,3);
console. log (addUp(2,5));*/

// Activity 1

/*const factorial = (n) => {
    if((n === 0) || (n === 1)){
        return 1;}
    else { return (n * factorial (n-1));}
    } 
console. log ( factorial(33));*/

// Activity 2

/*let orderCount = 0;
const takeOrder = (topping, Base) => {
    console. log (`Pizza with ${topping} and ${Base}`)
    orderCount++
}
takeOrder("pineapple", "Ketchup");

console. log (`this is order number ${orderCount}`);*/

//Activity 3 

/*let pinNum = 1234;
let balanceNum = 100;

const cashWithDrawal = (pin,withDraw) => {
    if ( (pinNum === pin) && (balanceNum >= withDraw)){
        console.log=prompt(yey);
    }
    else if ((pinNum !== pin)) {
        console.log=prompt("Error incorrect pin!")}
                else if ((balanceNum < withDraw)){
                    console.log("Your Broke!")
        }
    };


cashWithDrawal=prompt(1134, 101110); */

/*let alarm =  {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am"
}

let day = "Sunday";
let alarm1 = "";

if ( day == "Saturday" || day == "Sunday"){
alarm = alarm.weekendAlarm;
console.log(alarm);
} else if (day != "Saturday" ||  day != "Sunday"){
    alarm = alarm.weekdayAlarm;
    console.log(alarm)
}*/


//Activity 1 
/*
let person = {
    name : "Rhys",
    age : "26",
    FavSong : ["SummerMadness","Many Men", "Trust"],
    greetings : true,

sayHi (){
    if (this.greetings){
    return `Hello My Name Is ${name}`}
    }}

console. log (person.sayHi()); */

// Activity 2

// let pet = {
//     name : "Spike",
//     age : 1,
//     typeOfPet : "Poodle",
//     colour : "Brown",
   
//     fullTummy() {
//                   return `${this.name} is eating`
//                 },
//     water() {
//                   return `${this.name} needs water`
//                 }
            
//             };

// console.log(pet.water());

//Activity 3
/*
const coffeeShop = {
    branch: 'Starbucks',
  
    drinksMenu: {
      drink1: 4,
      drink2: 3.50,
      drink3: 1,
    },
  
    foodMenu: {
      food1: 2.5,
      food2: 3.5,
      food3: 1,
    },
  
    

    drinksOrdered(...drinksMenu) {
          let cost = 0;
          const drinksStr = drinksMenu.join(' with ');
          for (drink of drinksMenu) {
            cost  += this.drinksMenu[drink]
            
            return this.displayOrder(drinksStr, cost);
        }},

        foodOrdered(...foodMenu) {
            let cost = 0;
            const foodStr = foodMenu.join( ' with');
            for (food of foodMenu){
                cost += this.foodMenu[food]

                return this.displayOrder(foodStr, cost);
            }
        },
        
    displayOrder(order, cost) {
      return console.log(
        `You have ordered ${order}, that comes to £${cost}.`
      );
    },
  };
  
  coffeeShop.drinksOrdered('drink1');
  coffeeShop.foodOrdered('food1'); 
*/

// let coffeeShop = {
//                 branch : "costaLiverpool",
               
//                 drinksMenu : {
//                     "Coke" : [0.80],
//                     "Fanta": [0.80],
//                     "Tea": [1.00],
//                     "Coffee":[1.20]
//                 },
//                 foodMenu : {
//                          "Bacon on toast" :2.50,
//                          "Club Sandwich":3.00,
//                          "Salad": 1.50,
//                         "Eggs Benedict" : 3.90,
//                                 },

                
//             };
            
//             let drinkItems = Object.keys(coffeeShop.drinksMenu)
//             let drinksPrice = Object.values(coffeeShop.drinksMenu);
//             let foodItems = Object.keys(coffeeShop.foodMenu)
//             let foodPrice = Object.values(coffeeShop.foodMenu);

//             const drinksOrder =(drink) =>{
//                 for (item of drinkItems){
//                     if (item == drink){
//                         console.log(`your order is ${drink}`)
//                     }
//                 }
//             }
//             const foodOrder =(food) =>{
//                 for (item of foodItems){
//                     if (item == food){
//                         console.log(`your order is ${food}`)
//                     }
//                 }
//             }
            
//             foodOrder("Salad")
//             drinksOrder("Coke")
            // console.log(Object.entries(coffeeShop.foodMenu));

// 




