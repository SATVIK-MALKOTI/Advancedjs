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

//arrow functions are great for sending functions around as parameters and using shortcut notation
//
//(para1,para2) =>  console.log(para1+para2)
//() => console.log("hello");
//para => console.log(para);
//(para1,para2) =>  {multiple statements
//};



//let arrow = (x,y) => console.log(x+y);
//arrow(7,5)


//const arr  = ["apple","banana","pineapple"];
//arr.forEach (x => console.log(x));

//let spread = ["so","much","fun"];
//let message = ["js",'is',...spread,'and','very','powerful'];
//let message1 = ["js",'is',spread,'and','very','powerful'];
//console.log(message1);
//console.log(message)
//console.log(...message)

//function add2numbers(x,y,z,m){
//  console.log(x+y+z+m);
//let a = [1,2]
//let b = [3,4]
//let c = [...a,...b]
//add2numbers(c)
//rest operator

function someFunction(para1,...para2){
 console.log(para1,para2);
}
someFunction("hi","hello",'Apple')