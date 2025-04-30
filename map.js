// const fruits = new Map( [
//     ['apples',500],
//     ['banana',600],
//     ['oranges',200]
// ]);
// console.log(fruits);
//create a new map
// const fruits = new Map();

// fruits.set('apples',300)
// fruits.set('banana',400)
// fruits.set('oranges',330)
// console.log(fruits);
// console.log(fruits.get('apples'));


//set can be used to initialize, modify values to a map
//get is used to get values from a map

// console.log(typeof fruits);
// console.log(fruits.size);
// delete('oranges');
// fruits.clear();
// fruits.has('apples')//returns true if apples is an element of fruit+


// let text= ' '
// fruits.forEach(function(value,key){
//     text += key + '='+ value+' ';
// });

// console.log(text);


//map entries

// let text = '';
// for(const x of fruits.entries()){
//     text +=x+' ' ;
// }
// console.log(text);

// let text1 = '';
// for(const x of fruits.keys()){
//     text1 +=x+' ' ;
// }
// console.log(text1);

// let text2 = '';
// for(const x of fruits.values()){
//     text2 +=x+' ' ;
// }
// console.log(text2);

// let text3 = 0;
// for(const x of fruits.values()){
//     text3 +=x;
// }
// console.log(text3);

// const apples = {names:'apples'};
// const banana = {names:'banana'};
// const oranges = {names:'oranges'};
// const fruits = new Map();
// fruits.set(apples,300);
// fruits.set(banana,400);
// fruits.set(oranges,330);
// console.log(fruits.get(apples));
// console.log(fruits);



                                        // DESTRUCTURING MAPS



//unpack objectsinto variables 
//does change original object
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
// };

// let{firstName,lastName} = person; //order of variables does not matter
// console.log(firstName); 
// console.log(lastName);


// default destructuring
// let {firstName,lastName,country='india'} = person
// console.log(firstName);
// console.log(lastName);
// console.log(country);

// let{lastName:lname='johnny'} = person; 
// console.log(lname); //lname is a new variable and does not change the original object

// let name  = "GURUKULTHESCHOOL";
// let [a1,a2,a3,a4,a5] = name;
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);

// // using order
// const fruits = ["banana","apple",'orange','mango'];
// let[fruit1,fruit2] = fruits;
// let[fruit3,,,fruit4] = fruits;
// console.log(fruit1);
// console.log(fruit3);

// //usin indexing
// let{[0]:fruit5,[3]:fruit6} = fruits;
// console.log(fruit5);
// console.log(fruit6);

//REST PROPERTY 
// const num = [1,23,4,5,6,7,7,7];
// const[a,b,...rest]= num; // 4-7 becomes an array
// console.log(rest);
// console.log(a);
// console.log(b);


//destructuring maps

// const fruits = new Map( [
//     ['apples',500],
//     ['banana',600],
//     ['oranges',200]
// ]);
// let text= ' '
// fruits.forEach(function(value,key){
//     text += key + '='+ value+' ';
// });


// swapping variables using destructuring 

// let firstname = "john";
// let lastname = "doe";
// [firstname,lastname] = [lastname,firstname]
// console.log(firstname);
// console.log(lastname);


//EXPONENTIAL OPERATOR **

// let x = 2**3;
// console.log(x);
// console.log(Math.pow(2,3));

//JS ARRAY INCLUDES

const fruits = ["banana","apple",'orange','mango'];

console.log(fruits.includes('mango'));
console.log(fruits.includes('banana',1)); //false


//trailing comma added towards the end of iterable 
// Why Use Trailing Commas?
// Easier to reorder or add/remove lines
// Cleaner diffs in version control
//valid is ecma script 5

const person = {firstname :'john',
    lastname:'doe', //cant put extra ,
    age:30,
}

