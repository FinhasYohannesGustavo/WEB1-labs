console.log("Testing the console");
document.write("Finhas Yohannes Gustavo");
var name = 'Abebe Bekele'
let num = 900;
// let num = 900; with java script you can not define the same variable with the same value
var x = 10;
var x =20;
// console.log(name, num, num,x);

// Let is block scoped

let y= 10;

{
    let y=90; 
    // 
}

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

console.log("My full name is:",firstName,middleName,lastName);

var length=50;
var width=80;
var area=length*width/2;

console.log("The area of the triangle is: ",area);

// ES6 template literals
console.log(`The area is ${area} this is using back tick ES6 `);

document.write(`<div> <h2> test <h2>`);

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

