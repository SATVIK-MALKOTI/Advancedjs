                                        //CONGRUENCY

                                 
//multitasking with code
//whenever tasks are happening at the same time or parallely

//CALLBACK : a function passed as an argument to another function, to be called later , usually when some
//task finishes.

//EG:
// function doSomething(callbackfn){ // dosomething and sayhi execute parallely 
//     callbackfn();
// }
// function sayHi(){
//     console.log("HI!");
// }
// doSomething(sayHi);






// function judge(grade){
//     switch(true){
//         case grade == "A":
//             console.log("you got "+grade);
//             break;
//         case grade == "B":
//             console.log("you got "+grade);
//             break;
//         case grade == "C":
//             console.log("you got "+grade);
//             break;
//         case grade == "D":
//             console.log("you got "+grade);
//         case grade == "F":
//             console.log("you got "+grade);
//             break;
//         default:
//             console.log("what??");
//             break;
//     }
//   }
  
// function getGrade(score,callback){
//     let grade;
//     switch(true){
//         case score >=90 :
//         grade = "A";
//         break;
//         case score >=80 :
//         grade = "B";
//         break;
//         case score >= 70 :
//         grade = "C";
//         break;
//         case score >= 60:
//         grade = "D";
//         break;
//         default:
//         grade = "F";
//         break;
    
//     }
//     callback(grade)
// }

// getGrade(85,judge);

// //callback hell:nested callbacks,christmas tree problem, too many branches 


// setInterval(encourage,500);
// function encourage(){
//     console.log("you are doing great!");

// }

                                        // Promises

//2 callback parameters : Resolve/success and reject/failure callbacks

//when resolve() is called the proise is preassumed  to be successful and whatever is between the arrows 
// is returned and used as input for the then method on the promise object. If reject() is called , the 
// promise failed and the catch() method and the promise object(if present) is executed with the arguemnt
//  of the reject function


// let promise = new Promise(function(resolve,reject){
//     let x = 20;
//     if(x>10){
//         resolve(x);
//     }
//     else{
//         reject("too low");
//     }
// });

// promise.then( //.then for RESOLVE , .catch for failure
//     function(value){
//         console.log("success: ",value);
//     },
//     function(error){
//         console.log("ERROR :",error);
//     }

// );


//using arrow function

// const promise = new Promise((resolve,reject)=>{
//     // resolve("success");
//     reject("oops!");
// })
// .then(value =>{
//     console.log(value);
//     return "we";
// })
// .then(value =>{
//     console.log(value);
//     return "can";
// })
// .then(value =>{
//     console.log(value);
//     return "chain";
// })
// .then(value =>{
//     console.log(value);
//     return "promises";
// })
// .then(value =>{
//     console.log(value);
// })
// .catch(value => {
//     console.log(value);
// })


                                    //Async/Await


// f
// function saySomething(x){
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             resolve("something "+x);
//         },2000);
//     });
// }
// async function talk(x){     //shows pending without async await keyword
//     const words = await saySomething(x);
//     console.log(words);
// }
// talk(2);
// talk(4);
// talk(8);

                                        //EVENT LOOP

//Javascript is a single threaded language
//The event loop is the mechanism that allows JavaScript, which is single-threaded, to handle asynchronous operations (like timers, API calls, and DOM events) without blocking the main thread.
//CALLSTACk(synchronous code) AND CALLBACK QUEUE(asyncrhonous code)
//unless callstack is empty callback queue doesnt produce any results  
console.log("hi there");
setTimeout(()=> console.log('sorry i am late'),1000);//last o/p because its async, sync codes are executed first
console.log(add(4,5));
function add(x,y){
    return x+y;     //only function calls are stored in call stack , definitions are not a part of call stack
}
