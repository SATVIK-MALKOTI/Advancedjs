//function sayHello(){
// let you = prompt("Whats your name")
// console.log("hello",you+"!")
// }
// sayHello()

//let varcontfun = function(){
//   let varinfun = "im inside function";
//   console.log("hi there!",varinfun);
//};
//varcontfun();

//function tester(para1,para2){
//    return para1+" "+para2;
//
//}
//const arg1 = "argument 1"
//const arg2 = "argument 2"
//console.log(tester(arg1,arg2));
//
//function myfunc(param1,param2){
//
//}
//let a = parseInt(prompt("enter num1:"))
//let b = parseInt(prompt("enter num2:"))
//function add2numbers(x,y){
//  console.log(x+y);
//}
//add2numbers(a,b)

//function add2numbers(x=2,y=3){
//  console.log(x+y);
//}
//add2numbers();
//add2numbers(6,6);
//add2numbers(10);
//
//add2numbers(2,3,4,5);

//ARROW FUNCTIONS
//are great for sending functions around as parameters and using shortcut notation
//they are anonymous functions
 
// FORMAT:
//(para1,para2) =>  console.log(para1+para2)
//() => console.log("hello");
//para => console.log(para);
//(para1,para2) =>  {multiple statements
//};

//let arrow = (x,y) => console.log(x+y);
//arrow(7,5)

//arrow function as an arguemnt:
//const arr  = ["apple","banana","pineapple"];
//arr.forEach (x => console.log(x));

//SPREAD OPERATOR "..." :

//let spread = ["so","much","fun"];
//let message = ["js",'is',...spread,'and','very','powerful'];
//let message1 = ["js",'is',spread,'and','very','powerful'];
//console.log(message1);
//console.log(message)
//console.log(...message)

// function add2numbers(x, y, z, m) {
//     console.log(x + y + z + m);
//   }
//   let a = [1, 2];
//   let b = [3, 4];
//   let c = [...a, ...b];
//   add2numbers(...c);  
  
//rest operator

// function someFunction(para1,...para2){
//  console.log(para1,para2);
// }
// someFunction("hi","hello","how","are","you")

// function add2numbers(x,y){
//     console.log(x+y);
// }

// let a = add2numbers(1,2);
// console.log(a);  

// let arr = (x,y) => console.log(x+y)
// console.log(arr(1,2))
// function add2numbers(x,y){
//     return x+y;
// }

// let resArr = [];
// for(let i = 0; i < 10; i++){
//     let result = add2numbers(i,i*2);
//     resArr.push(result);
     
// }
// console.log(resArr);

// let add2numbers = (x,y) => x+y;

//VARIABLE SCOPE AND FUNCTIONS



// function testavailability(x){
//     console.log("available here ",x);
// }
// testavailability("hi");
// console.log("available here",x); // x is not defined here 


// function testavailability(){
//     let y = "local variable";
//     console.log("available here: ",y);
//  }
// testavailability("hi");
// console.log("available here",y); // will not work 

// function testavailability(){

//     let y = "local variable";
//     console.log("available here: ",y);
//     return y
//  }
// let z = testavailability();
// console.log("outside the function",z);  
// console.log("not available here",y); // y is not defined here


// function doingstuff(){
//     if(true){
//         var x = "local";
//     }
//     console.log(x); // x works since var is function scoped
// }
// doingstuff();

// function doingstuff(){
//     if(true){
//         console.log(x); //REFERENCE ERROR will not work before initialization
//         let x = "local";
//     }
    
// }
// doingstuff();



// function doingstuff(){
//     if(true){
//         console.log(x); // will work before initialization
//         var x = "local";
//     }
    
// }
// doingstuff();

// function doingstuff(){
//     if(true){
//         console.log(x); // will work before initialization
//         const x = "local";
//     }
    
// }
// doingstuff();

// let globvar = "global variable";
// console.log(globvar); // global variable is available here

// function createnewscope(x){
//     console.log(globvar); // global variable is available here
    
// }
// createnewscope("some parameter");
// console.log(globvar); // global variable is available here


// let x = "global variable";

// function doingstuff(){
//     let x = "local variable"; // local variabl overrides the global variable
//     console.log(x); // local variable is available here
// }
// doingstuff();
// console.log(x); // global variable is available here


//on removing let , local will be printed twice beacuse value inside the global variable is reassigned 

// let x = "global variable";
// function doingstuff(x){
//      console.log(x); // parameter names overrides the global variable
// }
// doingstuff("parameter"); 


//without let or var keywords variable starts actting as global variable
// function confuse(){
//   x = "guess my scope";
//   console.log('inside the function',x); 
// }
// confuse(); // guess my scope
// console.log('outside the function',x); // guess my scope

//THE immediately involved function expression (IIFE) is a way of expressing a function so that it 
// gets invoked immeddiately. It is anonymous, it doesnt have a name

// (function(){
//     console.log("IIFE")
// })();

// (function(x,y){
//     console.log(x+y)
// })(2,3);
 
// (() =>{
//     console.log("run right away");
// })()


//RECURSIVE FUNCTIONS:
//
// function getRec(nr){
//     if(nr==0){
//         return 1;
//     }
//     console.log(nr);
//     getRec(--nr);
// }
// getRec(3);

// function logRec(nr){
//     console.log('started function:',nr);
//     if(nr>0){
//         logRec(nr-1);
//     }
//     else{
//         console.log("done with recursion");
//     }
// console.log("ended funcntion:",nr)
// }
// logRec(3);


// function getrec(nr){
//     console.log(nr);
//     if(nr>0){
        
//         getrec(--nr);
//     }
//     console.log(nr);
   
// }
// getrec(3);

// performance of recursion is slower than iteration using loop

//NESTED FUNCTIONS:

// function doOuterFunctionStuff(nr){
//     console.log("outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x){
//         console.log(x+7);
     
//     console.log("I can access outer variables here",nr);
//                                     }
// }//cannot access x outside inner function
// doOuterFunctionStuff(2);

// //anonymous functions
// let funcVar  = function(){
//     console.log("anonymous function")
// };
// funcVar();

// //FUNCTION CALL BACKS 

// function doStuff(executestuff){
//     //callback
//     executestuff();
//     console.log("inside dostuff functions")
    
// }
// doStuff(funcVar)

//IN JS there are mnay inbuilt functions like settimeout functions, setinterval functions,

// let youGotThis = function(){
//     console.log("you got this")}

// setTimeout(youGotThis,2000); // 2 seconds delay before executing the function

// setInterval(youGotThis,2000); // 2 seconds delay before executing the function

(function(){
    console.log("Welcome");
})();
(function(){
 let first = 'laurence';
 return first;
})()
let result = (function(){
    let first = 'laurence';
    return first;
})();
console.log(result); // laurence
(function(first){
    console.log('my name is '+first);
})('laurence');