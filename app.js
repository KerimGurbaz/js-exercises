// const cars = [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";
// cars[4] = "TOFAS";

// console.log(cars[2],cars);


// let cars = new Array("Saab", "Volvo", "BMW");

// console.log(cars.sort())


// const person = { firstName: "John", lastName: "Doe", age: 46 };
// console.log(person.age);

// person[0] = "76";

// console.log(person)

// console.log(typeof person[0]);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.push("Lemon");

// fruits[fruits.length] = "Kivi"

// console.log(fruits)


// let fLen = fruits.length;

// for(let i = 0; i < fruits.length ; i++){
//     console.log(fruits[i])
// }


// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // let text = "<ul>";
// fruits.forEach(myFunction);
// // text += "</ul>";

// function myFunction(value) {
//   console.log(value + "kfhrwfkw");
// }


// const person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46;
// person[0] = 87

// console.log(person);

// // console.log(typeof person);

// // person.length;     // Will return 0

// // console.log(person[0])

// // const points = [40];  
// // console.log(points);

// console.log(Array.isArray(fruits))

// Exercise

// 1.Declare an empty array;

// const dec =[1,2,3,"4",5,6,7];
// console.log(dec.length)

// 4.Get the first item, the middle item and the last item of the array

// console.log(dec[0]);

// console.log(dec[dec.length -1]);

// console.log(dec[Math.floor(dec.length/2)]);


// 5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

// const mixedDataTypes =[1, "Kerim", true, [123], {} , "123", 3<5 ];

// 6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

// console.log(typeof mixedDataTypes[mixedDataTypes.length-1]);

// const itCompanies = []

// itCompanies[0]= "Facebook";
// itCompanies[1]= "Google";
// itCompanies.push("Microsoft");
// itCompanies.push("Apple");
// itCompanies.push("IBM");
// itCompanies.push("Oracle");
// itCompanies.push("Amazon");


// console.log(itCompanies);

// console.log(itCompanies[0],itCompanies[1]);
// console.log(itCompanies[itCompanies.length-1]);
// console.log(itCompanies[Math.floor(itCompanies.length/2)]);

// 10.Print out each company

// for (let i =0 ; i< itCompanies.length; i++){

//     console.log(itCompanies[i]);
// }

// 11.Change each company name to uppercase one by one and print them out

// itCompanies.forEach(i =>{
//    console.log(i.toUpperCase())
// });


// 12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.




// console.log(`${itCompanies.slice(0,6)} and ${itCompanies[itCompanies.length-1]} are big IT companies. `);

// console.log(itCompanies.slice(-1))


// 13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found


// let companies = prompt("enter your companies ?");

// let index = itCompanies.indexOf(companies);



// if(index == -1){
//     console.log("not found");
// }
// else{
//     console.log(companies)
// }


// for(let i=0; i<itCompanies.length ; i++){
//     if(itCompanies[i] == companies ){
//         console.log(itCompanies[i]);
//         // break
//     }
//     else{
//         console.log("not found");
//     }
// }


// console.log(itCompanies.indexOf("apple"));

// 14.Filter out companies which have more than one 'o' without the filter method

// console.log(itCompanies[0].split(""));



// for(let i = 0; i<itCompanies.length; i++){
//    if(itCompanies[i].indexOf("o") != itCompanies[i].lastIndexOf("o")){
//     console.log(itCompanies[i]);
//    }
// }


// ;
// console.log(y);

// let sayac = 0;

// for(let a = 0; a<itCompanies.length; a++){
//     let y = itCompanies[a].split("");
//     for(let i =0; i<y.length ; i++){
//         if(y[i] == "o"){
//             sayac +=1;
//             if(sayac >=2){
//                 console.log(itCompanies[a]);
//                 sayac = 0
//             }
//         }
//     }
    
// }

// for(let i = 0; i < y.length ; i++){
//     if(y[i]== "o"){
//         sayac += 1;
//         if(sayac >= 3){
//             console.log(x);
//             sayac = 0 
//         }
   
//     }      
// }

// const result = itCompanies.filter(i => i.includes("o"));
// console.log(result)

// let yazi = "kerim";

// let yazi_lengt = yazi.length
// let arr = []
// for( let i = yazi_lengt ; i>=0 ; i--){
//     arr.push(yazi[i])
 
    
// }
// console.log(arr.join(""))

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop());

console.log(fruits)

console.log(fruits.push("Kiwi"));

console.log(fruits.shift())
console.log(fruits)


console.log(fruits.unshift("LEMON"))
console.log(fruits)

// console.log(delete fruits[0]);

// console.log(fruits)


// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// console.log(myGirls.concat(myBoys).concat(myGirls).concat(fruits));
// console.log(myGirls.concat(myGirls, myBoys, "kerim"))


// console.log(fruits)
// console.log(fruits.splice(2, 0, "Lemon", "Kiwi"));

console.log(fruits)
console.log(fruits.splice(0, 2));
console.log(fruits)

// console.log(fruits)
// console.log(fruits.slice(1,3))
// // console.log(fruits.toString())
// console.log(fruits);

// 15.Sort the array using sort() method


const itCompanies = []

itCompanies[0]= "Facebook";
itCompanies[1]= "Google";
itCompanies.push("Microsoft");
itCompanies.push("Apple");
itCompanies.push("IBM");
itCompanies.push("Oracle");
itCompanies.push("Amazon");

const number =["32","1","6","7","9","4"]

console.log(itCompanies.sort());

console.log(number.sort())

// 16.Reverse the array using reverse() method
console.log(itCompanies[0].split("").reverse().concat(fruits));

// 17.Slice out the first 3 companies from the array

console.log(itCompanies);

console.log(itCompanies.slice(3));
// console.log(itCompanies.splice(3))

console.log(itCompanies);

// 18.Slice out the last 3 companies from the array

console.log(itCompanies.slice(itCompanies.length -3 ,itCompanies.length))

// 19.Slice out the middle IT company or companies from the array
itCompanies.push("clarusway")
console.log(itCompanies)
itCompanies.pop()

console.log(itCompanies[Math.floor(itCompanies.length/2)]);

itCompanies.length % 2 ? itCompanies[Math.floor(itCompanies.length/2)] : itCompanies[itCompanies.length/2]

myFunction = (a)=>{
    return a.length % 2 ? a[Math.floor(a.length/2)] : a[a.length/2]
}

console.log(myFunction(number));



// 20.Remove the first IT company from the array
console.log(itCompanies.shift())
console.log(itCompanies);

// 21.Remove the middle IT company or companies from the array

console.log(itCompanies.indexOf(myFunction(itCompanies)))
console.log(itCompanies)
console.log(itCompanies.splice(itCompanies.indexOf(myFunction(itCompanies)),1));

console.log(itCompanies)

// if(itCompanies.length%2){
//     itCompanies[Math.floor(a.length/2)]
// }else if(ce){
//     itCompanies[itCompanies.length/2]
// }
 

// else {
//     console.log(itCompanies.splice(itCompanies.indexOf(myFunction(itCompanies)),2));
// }

