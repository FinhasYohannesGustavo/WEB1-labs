var submit = document.body.querySelector('#submit');
submit.addEventListener('click',()=>{
    var p = document.createElement('p');
    var text= document.querySelector('#radius')
    var string = text.value;
 
    var area = parseInt(string)*Math.PI;
    var textNode= document.createTextNode(area);
    var div = document.querySelector('#content')
    p.appendChild(textNode)
    div.appendChild(p);
})


// Prompt for amount, interest rate and number of years. Now calculate the Simple Interest using the values, and show in alert box.

// var amount = prompt('Enter amount');
// var interest = prompt('Enter Interest')
// var time = prompt('Enter years');
// var totalAmount=(interest/100);
// totalAmount=totalAmount*amount*time;
// totalAmount+=parseInt(amount);
// alert(totalAmount)

// Check if any given string is palindrome. Use input element to get the string.

// var palindrome = prompt('enter your string')

function isPalindrome(string){
    var len = string.length;
    for(var i =len-1,j=0;i>len/2-1;i--,j++){
        if(string[j]!=string[i]){
    
            return 'not a palindrome'
        }
        else{
            console.log(string[i],string[j])
        }
  
    }
    return 'is a plaindrome'
}

// alert(isPalindrome(palindrome));

// Copy text of first text box to second text box on every change of value in first text box - Use Event Listener)

var text1 = document.getElementById('text1');
text1.addEventListener('keyup',()=>{
    var val = text1.value;
    var text2 = document.getElementsByName('text2');
    Array.from(text2).forEach(element=>element.value=val)
})

// Allow submission of form only if the user has entered his name (should not be blank) and age (must be greater than or equals to 18) – Use Event Listener
var button1= document.getElementById('button1')
button1.addEventListener('click',(event)=>{
    var name = document.querySelector('#name1')
    var age= document.getElementById('age1');
    if(name.value!=''&&parseInt(age.value)>=18){
        alert('Succesfully Submitted')
    
    }
    else{
        event.preventDefault();
        alert('you have missed the criterion')
    }
})

// Write a JavaScript function that alerts the text and values of the selected options on a multi-select list and a drop down list when their values are changed. – Use Event Handler

var selected = document.getElementById('country')
selected.addEventListener('change',()=>{
    alert(selected.value)
})

// Change the color of a div element on mouse over and restore it on mouse out. Use event handler
var divColorChanged = document.getElementById('content4')

divColorChanged.addEventListener('mouseover', ()=>{
    // divColorChanged.style.backgroundColor='grey'
    divColorChanged.style.backgroundColor='black'
})
divColorChanged.addEventListener('mouseleave',()=>
{
    divColorChanged.style.backgroundColor='white'
})

// Create a webpage that asks the user about his name and says goodbye to him/her when leaving the page.
// window.addEventListener('beforeunload',(event)=>{
//     event.preventDefault();
//     nameLeave=prompt('please tell me your name')
//     alert('goodbye'+' '+nameLeave)
    
// })
// function askName(){
//     prompt('what is it you want')
// }


// var timer = setTimeout(askName,10000)

// Create a Clock object and encapsulate methods like start and stop for starting and stopping the click. Implementation must use Prototype pattern and event listener mechanism. Display the clock in some div or span or p element and use a button to start and stop the tick.
// Functions: start, stop, display
// p/span/div and a button for starting and stopping

var createdDiv=document.createElement('div')
var startButton=document.createElement('button')
var stopButton=document.createElement('button')




