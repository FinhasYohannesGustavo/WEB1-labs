var library = [ 
    {
    title:  'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254,
    price:2300
    },
    {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264,
    price:4200
    },
    {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245,
    price:1200
    
    }];

    var PersonsWithM=[];
    // sort the above array object based on the price asc
   library.sort((a,b)=>a.price-b.price);
   var price =library.map(a=> a.author +' '+ a.price );
   console.log(price);
    
    
// Create a new array consisting of book titles only
var bookNamesOnly=[];
library.filter(n=>bookNamesOnly.push(n.title));
console.log(bookNamesOnly);

var bookNamesOnly2 = library.map(a=>a.title);
console.log(bookNamesOnly2);

// Calculate the total sum of book prices
var sum=0;
library.filter(n=>sum+=n.price);
console.log(sum);

var sum2 =0;
library.forEach(a=>sum2+=a.price);
console.log(sum2);

// find and replace the word “the” to “A” and create a new array consisting of book titles only?
var bookNamesWithA=[];
library.filter(n=>bookNamesWithA.push(n.title.replace('The','A')));
console.log(bookNamesWithA);

varNewArray= library.filter(a=>a.title.search("The")!=-1);
var booksWithTester =varNewArray.map(a=>{a.title=a.title.replace('The','Tester');return a});
console.log(booksWithTester.map(a=>a.title));
// •	Write a JavaScript function to format a number up to specified decimal places
function decimals(a, b){
   
    return a.toFixed(b);
}

console.log(decimals(2.6987,4));


// •	Write a JavaScript function to find the highest value in an array. 

function highest(a){
    var highest=a[0];
    for(var i=1;i<a.length;i++){
        if(a[i]>highest){
            highest=a[i];
        }

    }
    return highest;
}

console.log(highest(([-12,-34,0,-56,-3])))
console.log(highest((([12,34,56,1]))));

// •	Write a JavaScript function to find the lowest value in an array. 
function lowest(a){
    var lowest=a[0];
    for(var i=1;i<a.length;i++){
        if(a[i]<lowest){
            lowest=a[i];
        }

    }
    return lowest;
}
console.log(lowest([12,34,56,1])); 
console.log(lowest([-12,-34,0,-56,-1]));


// •	Write a JavaScript function to split a string and convert it into an array of words. 
function string_toArray(a){
    return a.split(' ');
}
console.log(string_toArray("Robin Singh"))

// •	Write a JavaScript function that hides email addresses to prevent unauthorized access

function protect_email(a){
    var holdingPlace = a.search('@');
    console.log(holdingPlace)
    
    for(var i = holdingPlace - 1; i>0;i--){
        a.replace(a.charAt(i),".");
        console.log(a.charAt(i));
        console.log(a);
    }
    return a;
}
console.log(protect_email2("finhasgustavojhon@example.com"));

function protect_email2(a){
    y=a.split('@');
    var num = y[0].length - 1;
    var sub3=y[1];
    var sub1 = y[0].substring(0,num/3);
    var sub2='...@';
    var arr = [sub1,sub2,sub3];
    console.log(arr)
    return arr.join('');



}

// •	Write a JavaScript function to capitalize the first letter of each word in a string. 

function capitalizeFirstLetter(a) {
    a[0]=a.charAt(0).toUpperCase();
    for(var i =0;i<a.length;i++){
        if(a.charAt(i)==" "){
            a[i+1]=a.charAt(i+1).toUpperCase();
        }
    }
    return a;
}

// Capitalize the first letter of words
function capitalizeWords(str) {
    
    const words = str.split(' ');
  
   
    const capitalizedWords = words.map(word => {
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1);
      return firstLetter + restOfWord;
    });
  
    const capitalizedString = capitalizedWords.join(' ');
  
    return capitalizedString;
  }
console.log(capitalizeWords('js string exercises'));


// Write a java script function to test whether a string starts with a specified string

function startsWith(a,b){
    if(a.search(b)==0){
        return true;
    }
    return false;
}

console.log(startsWith('js string exercises', 'js'));

