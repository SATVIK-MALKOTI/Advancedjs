// let dog = {
//     dogname:"javascript",
//     weight: 10,
//     age: 5,     
//     color:"brown",
//     bark:function(){
//         console.log("woof woof")
//     }
// }

// class ClassName{
//      constructor(prop1,prop2){
//         this.prop1 = prop1;
//         this.prop2 = prop2; 
//     }

// }
// let obj = new ClassName("arg1","arg2")
// console.log(obj.prop1)
// console.log(obj.prop2)

// class Dog{
//     constructor(dogname, weight, age, color) {
//         this.dogname = dogname;
//         this.weight = weight;
//         this.breed = breed;
//         this.color = color;
//     }

//  }
// let dog1 = new Dog("javascript", 10, 5, "brown")
// console.log(dog1.dogname);
// console.log(dog1.weight);


//Classes are blueprint for objects
//CLass names should start by capital letter

// class Person{
//     constructor(firstname,secondname='doe'){//default arg
//         this.firstname = firstname;
//         this.secondname = secondname;
//     }
// }
// let person1 = new Person("John");
// console.log(person1.firstname);
// console.log(person1.secondname);
// console.log(person1);

//functions on a class are called methods

// class Person{
//     constructor(firstname,secondname='doe'){//default arg must be trailing arguments
//         this.firstname = firstname;
//         this.secondname = secondname;
//     }
//     greet(){
//         console.log("hello " + this.firstname + " " + this.secondname);
//     }

// }
// let person1 = new Person('john');
// person1.greet()
// console.log(person1.firstname);
// console.log(person1.secondname);


                                            //METHODS 


//functions on a class are called methods
//function keyword is not used in a class

// class Person{
//     constructor(firstname,secondname='doe'){//default arg must be trailing arguments
//         this.firstname = firstname;
//         this.secondname = secondname;
//     }
//     greet(){
//         console.log("hello " + this.firstname + " " + this.secondname);
//     }
//     compliment(name,object){
//         console.log("That's wonderful " + this.firstname + " " + this.secondname + " " + name + " " + object);
//     }
// }
// let person = new Person('john','mayer');
// person.compliment(",whats",'up');
// person.greet();


//PROPERTIES 

//use # for private access
//cannot be accessed outside the class 
// class Person{
//     #firstname;  //private property
//     #secondname; //private property  
//     constructor(firstname,secondname){
//         this.#firstname = firstname;
//         this.#secondname  = secondname;

//     }
// }

// let p = new Person('john','doe');
// console.log(p.firstname); //cannot access a private member

// class Person{
//     #firstname
//     #secondname
//     constructor(firstname,secondname){
//         if(firstname.startswith('M')){
//             this.#firstname = firstname;
//         }
//         else{
//             this.#firstname = 'M'+firstname;
//         }
//          this.#secondname = secondname;
//     }
// }


// class Person{
//     #firstname
//     #secondname
//     constructor(firstname,secondname){
//         this.#firstname  = firstname;
//         this.#secondname  = secondname;

//     }
//     get firstname(){
//         return this.#firstname;
//     }
//     set firstname(firstname){
//         this.#firstname = firstname;
//     }
//     get secondname(){
//         return this.#secondname;
//     }
//     set secondname(secondname){
//         this.#secondname = secondname;
//     }
    
    
// }
// let p = new Person('john','doe')

// p.firstname = 'hello'
// console.log(p.firstname);


//GIT
/* 
1. git init
2. git add . 
3. git commit -m "msg" 
4. git push -u
*/

                                            //INHERITANCE
                                    
// class Vehicle{
//     constructor(color,currentspeed,maxspeed){
//         this.color = color;
//         this.currentspeed = currentspeed;
//         this.maxspeed = maxspeed;
//     }
//     move(){
//         console.log("moving at " + this.currentspeed + "km/h");
//     }
//     accelerate(amount){
//         this.currentspeed += amount;
//     }
// }

// class Motorcycle extends Vehicle{
//     constructor(color,currentspeed,maxspeed,fuel){
//         super(color,currentspeed,maxspeed); //used to call the constructor of the parent class
//         this.fuel = fuel;
//     }
//     dowheelie(){
//         console.log("doing a wheelie");
//     }
// }

// let motor = new Motorcycle("red", 0, 250, "petrol");
// //let for object creation 
// console.log(motor.color); 
// motor.accelerate(50);
// console.log(motor.currentspeed); 

                                                //PROTOTYPES
//mechanism by which objects can inherit features from one another
// class Person{
//     constructor(firstname,secondname){
//         this.firstname = firstname;
//         this.secondname = secondname;
//     }
//     greet(){
//         console.log("HI there");
//     }
// }

// //using prototype to add a method to the Person class

// Person.prototype.newmethod = function(){
//     console.log('hi ' + this.firstname + " " + this.secondname);
// }
// Person.prototype.favcolor = 'blue'; 
// //adding a property to the Person class

// let object = new Person('john','doe');
// object.greet(); //HI there
// object.newmethod(); //hi john doe
// console.log(object.favcolor); //blue





