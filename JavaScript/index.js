console.log("Testing the console");
// document.write("Finhas Yohannes Gustavo");
var name = 'Abebe Bekele'
let num = 900;
// let num = 900; with java script you can not define the same variable with the same value
// console.log(x); this does not give any errors but shows undefined because variables created with
// var are hoisted
var x = 10;
var x =20;
console.log(name, num, num,x);

// Let is block scoped
// console.log(y) this doesnt work because variables created with let are not hoisted
let y= 10;

{
    let y=90; 
    // this is allowed 
}
// let y =30; not allowed 

console.log("let doesnt affect the block value",y);


var z= 10;

{
    var z=90;
}

console.log("var affects the block value",z);


// hoisted
    // hoisted applies to var in that whatever variable you use at the bottom will be
    // declared above on the top thus its value becomes undefined instead of a syntax error
var hoisted;
console.log('hoisted is',hoisted);

var hoisted=300;

console.log('when you use a + for concatination'+'it does not add a space');


// ES5 variable definition
var firstName= 'Finhas';
var middleName='Yohannes';
var lastName='Gustavo';


console.log("My full name is with + concatination:",firstName+middleName+lastName);

console.log("My full name is with ',' concatination:",firstName,middleName,lastName);

var length=50;
var width=80;
var area=length*width/2;

console.log("The area of the triangle is: ",area);

// ES6 template literals
console.log(`The area is ${area} this is using back tick ES6 `);

// document.write(`<div> <h2> test <h2>`);

// for(var i =1;i<100;i++){
    
//     if(i==50){
//         break;
//     }
//     if(i%2==0){
//         document.writeln(i);
//     }
    
// }

// var x=11;

// if(x>1&&x<10){
//     if(x%2==0){
//         console.log("number is between 1 and 10 and even");
//     }
// }

// else if(x>10&&x<20){
//     if(x%2==0){
//         console.log("number is between 10 and 20 and even");
//     }
// }

// else{
//     console.log("The number is greater than 100");
// }


// var ternary=11;

// var ans=(ternary>=1&&ternary<=10?(ternary%2==0?'even':'odd'):ternary>=10&&ternary<=20?(terany%2==0?'even':'odd'):'not valid');

let comp="122";
let numsd=122;

var booleans= true;
var bools = "true";

// Double equals does type conversion whilst triple equals(strict equality does not)
console.log(comp==numsd)
console.log(bools==booleans)



console.log(comp===numsd)

// Functions
console.log(average(2,4,10,5))

// parameterized function
function average(a, b){
    let num=0;
    for(let i=0; i<arguments.length;i++){
        num+=arguments[i];
        
   }
    return num/arguments.length;
}

// console.log(sums(10,20))
// Arrow function
var sums=(a,b)=>{return a+b};
console.log(sums(10,20));

// Anonymous function as well as arrow functions are not hoisted
var sums2 = function(a,b)
{return a+b};
console.log(sums2(10,20));


// You can use rest parameters to use array functions
function paramAverage(...params){
    let num=0;
    params.push(8)
    
    for(let i=0; i<params.length;i++){
        num+=params[i];        
   }
  
    return num/params.length;
}

console.log(paramAverage(2,3,4,5));

console.log(average(2,3,4,5));

// Anonymous functions(functions without a name). These functions are not hoisted

var sum=function(a,b){
    return a+b;
}
console.log(sum(2,3));

//Arrow functions or Lambda functions
var sum=(a,b)=>a+b
console.log(sum(2,7));


//Even or Odd questions with arrow and anonymous functions
//ARROW...
var even=(a)=>a%2==0?'even':'odd';
console.log(even(20))
//ANONOYMOUS...
var even=function(a){
    return a%2==0?'even' : 'odd';
}
console.log(even("556"))


//Output the maximum number from function arguments
var max = function(){
    maxNum=arguments[0];
    for(var i =0; i<arguments.length;i++){
        if(arguments[i]>maxNum){
            maxNum=arguments[i];
        }
    }
    return maxNum;
}
console.log(max(10,20,-5,90,150,23));

//Function expressions are not hoisted while function declarations are hoisted
//If you use the keyword var to create a function it is a function expression
//If you use the keyword 'function' to create a function, it is a function declaration
// Callback Function is a function that can be passed as an argument to another fucntion
function firstNames(a){
    return 'your first name is ' + a;
}
function fullName(a, b, callback){
    return callback(a) + ' and last name is ' + b;
}
console.log(fullName('abebe', 'kebede', firstNames));


function add(a, b){
    return a+b;
}
function avg(a, b, callback){
    return callback(a,b)/2;
}
console.log(avg(2, 4, add));


function addCalc(a,b){
    return a+b;
}

function subCalc(a ,b){
    return a-b;
}

function mulCalc(a,b){
    return a*b;
}

function calc(a, b, callback){
    return callback(a,b);
}

console.log(calc(10,5,mulCalc));
console.log(calc(10,6,(a,b)=>a-b));

// function adds(a,b){
//     return a+b;
// }
// function subs(a,b){
//     return a-b;
// }

// function calcs(a,b,func){
//     return func(a,b);
// }
// console.log(calcs(10,20,adds))

//Function constructor
// there needs to be three parameters and the last parameter is the return statement
var sum=new Function('a', 'b', 'return a+b')
console.log(sum(2, 30));



//Objects have two things: properties and methods
//Person
//  P-name
//  P-age
//  P-gender
//  M-fullName()

//IS MERELY USED FOR DEMONSTRATION AND IS NOT SUPPOSED TO REPRESENT THE REAL WORLD
//A CHAIR DOES NOT HAVE A METHOD or A BEHAVIOR 
//Chair
//  P-color
//  P-material
//  P-price
//  P-width
//  P-length
//  P-area()


//Object Initialization
var Person={
    name:'Abebe',
    age: 90,
    gender: 'male',
    fullName: function(){
        return this.name
    }
}

var me={
    age:24,
    height:1.73,
    firstName:'finhas',
    lastName:'Gustavo',
    fullName:()=>firstName+' '+lastName

}
console.log(me.fullName());
console.log(me.age)
console.log(Person.age);

var Chair={
    color: 'Red',
    width: 8,
    length: 9,
    price: '$50',
    material: 'Ebony Wood', 
    area: function(){
        return (this.width*this.length)/2;
    }
}
console.log(Chair.area());

var bestSubject = new Object();
bestSubject.name='maths';
bestSubject.grade='A'
bestSubject.teacher='Paul';
bestSubject.full=()=>bestSubject.grade+' '+bestSubject.teacher;

console.log(bestSubject.full()); 




for(var q1=1;q1<10;q1++){
    document.write(`<br>`);
    for(var q2=q1;q2>0;q2--){
        document.write('x');
    }
    
}

document.write(`<br>`);
document.write(`<br>`);

for(var q1=10;q1>0;q1--){
    document.write(`<br>`);
    for(var q2=q1;q2>0;q2--){
        document.write('x');
    }
    
}




