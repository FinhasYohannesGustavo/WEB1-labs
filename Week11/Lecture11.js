// ELEMENT TREE 
// body
// |__div
//     |__p
//         |__a
//     |__p

//     var p = document.body.firstElementChild.lastElementChild to target the second paragraph
//     p.textContent = 'new Prop'
//     p.innerHTML = 'new Prop'


// NODE TREE 
// body
//     |__>text
//     |__>div
//         |__>text
//         |__>p
//             |__>text
//             |__>a
//             |__>text
//         |__>text
//         |__>p
//         |__>text
//     |__>text

// var p = document.body.firstChild.nextSibling.lastChild.PreviousSibling to target the second paragraph



//The above is a mere refresher of last week's quick DOM notes

// Main DOM attributes
//document.getElementsById()
//document.getElementsByClassName()
//document.getElementsByTagName()
//document.getElementsByTagName()
//document.querySelector()
//document.querySelectorAll()

var div = document.getElementById('div')
div.style.backgroundColor = 'green';
div.style.color = '#fff'


var pars = document.getElementsByClassName('one');

// for (var i = 0; i<pars.length;i++){
//     pars[i].style.color='red';
//     pars[i].align  ='center';
// }

// for each does not work in an element collection
// pars.forEach(a=>a.style.color='red');

// change to an array collection using array.from

Array.from(pars).forEach(a=>a.style.color='red');


// query selector All returns a node selection and can use array functions 
// without having to type cast
var pp = document.querySelectorAll("p.one");

pp.forEach(p=>p.style.color='green');


var mainDiv = document.querySelectorAll("#div");
mainDiv.forEach(p=>p.style.backgroundColor='blue');

var paragraphs = document.querySelectorAll('div p');
paragraphs.forEach(p=>p.style.color='yellow');
paragraphs.forEach(p=>p.style.fontSize= '30px');
paragraphs.forEach(p=>p.style.fontFamily='georgia');

var link = document.querySelector('.link')
link.href = 'http://www.google.com'
link.setAttribute('href','http://www.google.com');

var div = document.querySelector('#div')
let p=document.createElement('p')
let text = document.createTextNode('New paragraph content')
p.appendChild(text)
div.appendChild(p)

let child = div.firstElementChild.nextElementSibling
div.removeChild(child);


var div2 = document.querySelector('#two');
div2.style.border='2px solid red';
div2.style.height='80vh';

// div2.onmouseover = createElem
div.addEventListener('click', createElem)
div.addEventListener('click', ()=>alert('yes'))
div.addEventListener('click', (e)=>{
    console.log(e.target);
})
div.addEventListener('click', ()=>alert('no'))
div.addEventListener('click', deleteElem)

function createElem(){
    alert('Create Element');
    var par = document.createElement('p');
    var texts = document.createTextNode('We created something');
    par.appendChild(texts);
    div2.appendChild(par);
}

function deleteElem(){
    alert('Delete Element');
    var par2 = document.div2.querySelector('p');
    div2.removeChild(par2);
}

// Events move from child to parent this is called bubbling.
//  the stop propagation stops bubbling to upper parents
var body = document.body;
body.style.height = '250vh'
body.style.border = '10px solid yellow'
var parent = document.querySelector('#parent')
var childs = document.querySelector('#child')
parent.style.height = '50%'
parent.style.border = '10px solid red'
childs.style.height = '50%'
childs.style.border = '10px solid green'
// parent.style.display='flex';
// parent.style.justify-content='center';
childs.addEventListener('click',(e)=>e.stopPropagation(alert('child')));
parent.addEventListener('click',()=>alert('parent'));
body.addEventListener('click',()=>alert('body'));



