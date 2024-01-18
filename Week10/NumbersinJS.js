
var checker=3.627;
console.log(checker.toFixed(2));

z = 5.9;
console.log(Math.round(z));

z = 5.1;
console.log(Math.ceil(z));

z = 5.8;
console.log(Math.floor(z));

console.log(Math.random());
console.log(Math.random());
console.log(Math.ceil(Math.random()*20));
console.log(Math.PI.toPrecision(10));

let text = 'this is a \"sample\", text for, learning strings';

console.log(text.length);
console.log(text.toUpperCase());

let y= text.split(' ');
console.log(y);

console.log(text.replace('text', 'lang'));
console.log(text.charAt(30));
console.log(text.search('for'));
console.log(text.search('fors'));
console.log(text.includes('for'));
console.log(text.includes(''));
console.log(text.indexOf('t'));
console.log(text.indexOf('t', 19));
console.log(text.lastIndexOf('t'));
console.log(text.indexOf('for'));

console.log(text.slice(0,30));
console.log(text.substring(5,8));
console.log(text.substr(5,8));

//Excercise

let url= "http://www.hilcoe.net/template/index.htm";

// Extract the word template

var temps='template';
var temp= url.slice(url.search(temps),(url.search(temps) + temps.length));
var temp2= url.slice(url.search(temps),url.lastIndexOf(temps));
var temp3 = url.slice(url.search(temps),url.lastIndexOf(temps));

console.log(url.lastIndexOf(temps))
console.log(url.search(temps));
console.log(temp3);

let Person=[
    {id:1, name:'abebe'},
    {id:2, name:'mola'},
    {id:3, name:'kebede'},
    {id:4, name:'mohammed'}
]

var PersonsWithM=[];
var PersonsWithB=[];
Person.filter(n=>n.name.includes('m')?PersonsWithM.push(n.name) +' ':'');
Person.map(a=>a.name.includes('b')?PersonsWithB.push(a.name): '')
console.log(PersonsWithM);
console.log(PersonsWithB)



var div = document.body.firstElementChild
let title = div.parentElement.previousElementSibling.lastElementChild
title.textContent = 'new title';


// With Node
var div2=document.body.firstChild.nextSibling
var titleNode = div2.parentNode.previousSibling.previousSibling.lastChild.previousSibling;
titleNode.textContent='With node';


var div3 = document.body.firstChild.nextSibling;
var titleNode3= div3.firstChild.nextSibling;
titleNode3.textContent='finhas is the bomb';
 
var test = document.getElementsByName("test");
(test).forEach(element => {
    element.textContent='we da best'
});

var test2 = document.getElementById('tester');
test2.textContent='We are the best?';

