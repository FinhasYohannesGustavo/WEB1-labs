
// y=3.627;
// console.log(y.toFixed(1));

z = 5.9;
console.log(Math.round(z));

z = 5.1;
console.log(Math.ceil(z));

z = 5.8;
console.log(Math.floor(z));

console.log(Math.random());
console.log(Math.random());
console.log(Math.ceil(Math.random()*20));

let text = 'this is a sample, text for, learning strings';

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

let url= "http://www.hilcoe.net/template/index.htm"

// Extract the word template

var temps='template';
var temp= url.slice(url.search(temps),(url.search(temps) + temps.length));
var temp= url.slice(url.search(temps),(url.lastIndexOf(temps)));


console.log(temp);

let Person=[
    {id:1, name:'abebe'},
    {id:2, name:'mola'},
    {id:3, name:'kebede'},
    {id:4, name:'mohammed'}
]

var PersonsWithM=[];
Person.filter(n=>n.name.includes('m')?PersonsWithM.push(n.name) +' ':'');
// Person.map(a=>a.name.includes('o')?PersonsWithM.push(a.name): '')
console.log(PersonsWithM);



var div = document.body.firstElementChild
let title = div.parentElement.previousElementSibling.lastElementChild
title.textContent = 'new title';


// With Node
var div2=document.body.firstChild.nextSibling
var titleNode = div2.parentNode.previousSibling.previousSibling.lastChild.previousSibling;
titleNode.textContent='With node';

