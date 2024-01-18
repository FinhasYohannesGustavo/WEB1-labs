var divFirst = document.getElementById('div');
divFirst.style.backgroundColor='black';
// divFirst.style.color='white';
var one = document.getElementsByClassName('one');
Array.from(one).forEach(element=>element.style.color='white');

// no need to type cast here

var two = document.querySelector('.two');
two.style.color='white';

var allPars = document.querySelectorAll('p');
allPars.forEach(element=>element.style.color='white');


var links = document.querySelector('.links');
links.href='http://google.com';
links.setAttribute('href','http://www.google.com');
links.textContent='google';

var p = document.createElement('p');
var textForP= document.createTextNode("We created something");
divForCreate = document.querySelector('#parent');
divForCreate.style.backgroundColor='red'
p.appendChild(textForP);
p.style.backgroundColor='green';
p.style.width='50%'
divForCreate.appendChild(p);
// divForCreate.removeChild(document.querySelector('#child'));

function createElem(){
    var forCreate = document.querySelector('#parent');
    var p = document.createElement('p');
    p.classList.add('artificial');
    var text = document.createTextNode('Created with button');
    p.appendChild(text)
    forCreate.appendChild(p);
    p.style.backgroundColor='white'
}

function deleteElem(){
    var forDelete = document.querySelector('#parent');
    forDelete.removeChild(document.querySelector('.artificial'));
}

// Another way to add an event to an element in the html
var delButton = document.querySelector('.delete');
// delButton.addEventListener('mouseover',deleteElem);
delButton.addEventListener('click',deleteElem);

// Event bubbling

var parentDiv= document.querySelector('#parent');
parentDiv.style.border='10px dashed black';
parentDiv.style.height='60vh';
parentDiv.style.backgroundColor='white';

var childDiv = document.querySelector('#child');
childDiv.style.border='8px solid red';
childDiv.style.height='30vh';
childDiv.style.backgroundColor='grey'

childDiv.addEventListener('click',(e)=>e.stopPropagation(alert('clicked child')))
parentDiv.addEventListener('click',function(){alert('clicked parent')})

body= document.body;
body.addEventListener('click',function(){alert('clicked body')})

var buttonDele= document.body.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
buttonDele.textContent='DeleteWoks?';

// var divChild= document.body.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
var divChild= document.body.lastElementChild.previousElementSibling.previousElementSibling.firstElementChild

console.log(divChild);
divChild.style.backgroundColor='blue';
console.log('test');



var buttonclick = document.body.lastChild.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling
console.log(buttonclick)
buttonclick.textContent="Create";


var buttonclicks = document.body.firstElementChild
var buttonsubmit = document.getElementsByTagName('input');
var fname=document.getElementsByName('FirstName');
(buttonsubmit[1]).addEventListener('click',()=>{
    alert(fname[0].value);
})
console.log(buttonclicks)







