// Declaring and initializing arrays

let nums =[1,4,6,4,8,9,10]
let nums2= new Array(9,3,4,5)

console.log(nums['4']);
console.log(nums2);

let nums3=nums.concat(nums2);

console.log(nums3);


function even(a){
    return a%2==0
}

console.log(nums.every(even));


// This checks if there are some in the nums array that is even
console.log(nums.some(a=>a%2==0));


let enNum=nums.filter(a=>a%2==0)

console.log(enNum)


// For Each
var T=0;
nums3.forEach(a=> T +=a);
console.log(T);

// Create an array of even numbers from num array 
// Create an array of odd nummbers from num array

var numsOdd= [];
numsEven = [];
nums3.forEach(a=>!(a%2==0)?numsOdd.push(a):numsEven.push(a));
// numsEven= nums3.filter(a=>a%2==0);
// numsOdd = nums3.map(a=>a%2!=0?a:'');

console.log(numsOdd);
console.log(numsEven);

var oddAdd=0;
var evenAdd=0;
nums3.forEach(a=>a%2==0?evenAdd+=a:oddAdd+=a);

console.log(oddAdd);
console.log(evenAdd);
console.log(evenAdd);

var arr=[1,2,4,6,7,2,8,9,10,2];

console.log(arr.indexOf(2,2));
console.log(arr.indexOf(2));

console.log(arr.lastIndexOf(2));
console.log(arr.lastIndexOf(2,8));
console.log(arr.lastIndexOf(2,4));



// Join(converts arrays to strings using a character that you give it)
var x = arr.join('$')
console.log(x)
var arr300=[];
arr300=x.split('$');
console.log(arr300);

var Samparray = ["Red", "Green", "White", "Black",]
var colors = Samparray.join(',')
var colors2 = Samparray.join('_')
var colors3 = Samparray.join('+')

console.log(colors)
console.log(colors2)
console.log(colors3)

// Shifts removes the first occurence and returns it from the array     
console.log(Samparray.shift());


console.log(Samparray);

// unshift does the opposite
console.log(Samparray.unshift('red'))
console.log(Samparray);

// The reverse function reverses the array permanenetly

Samparray.reverse();

console.log(Samparray);

var num =[1,2,3,4,5,6,7,8,9];
var reduced = num.reduce((accumulator,b)=>accumulator-b);
console.log(reduced)

var numsSorted = num.sort((a,b)=>(a%2)-(b%2)||a-b);
console.log(numsSorted);

//Find function returns the first element matching the condition
var evensNm= num.find(a=>a%2==0);
console.log(evensNm);
console.log(num.findIndex(a=>a%2==0));

// Map takes call back function and returns an array true or false

var y= arr.map(a=>a%2==0);
console.log(y);


var Person=[
    {id:1, name: 'abebe', salary:9000},
    {id:2, name: 'saba', salary:1000},
    {id:3, name: 'alemu', salary:2000},
    {id:4, name: 'nahom', salary:3000},

]

console.table(Person);

// Create a new array containing of persons names who earn above 2000
let highEarningPersons = Person.filter(a=>a.salary>2000);
var richPeople =[];
var PersonSortedDesc=[];
Person.sort((a,b)=> b.salary-a.salary);
console.log(Person.forEach(a=>PersonSortedDesc.push(a.salary)));
console.log(PersonSortedDesc);

console.log(highEarningPersons);
Person.filter(a=>a.salary>2000?richPeople.push(a.name):"");
console.log(richPeople);
 
// push and unshift

// add an element at the end 
nums.push(13);


// add an element at the begining
nums.unshift(78);

console.log(nums);

nums.pop();

console.log(nums);

nums.shift();

console.log(nums);


// Reduce reduces your array value to a single value
// 

console.log(nums.reduce((a,b)=>a+b));



// Sort sorts the array in ascending and descending order

console.log(nums.sort((a,b)=>a-b));
console.log(nums)
// sort even numbers and odd numbers in one array and let the even numbers appear first

var sortedArrayOfOddsAndEvens=[];
var nums4= [10,34,54,33,11,10,5,6,9,87];
nums4=nums4.sort((a,b)=>a-b);
console.log(nums4);
 nums4.filter(a=>a%2==0?sortedArrayOfOddsAndEvens.push(a):"");
 nums4.filter(a=>a%2==0?"":sortedArrayOfOddsAndEvens.push(a));
console.log(sortedArrayOfOddsAndEvens)


//The instructor's answer using filter and concatination
// var earray = nums4.filter(a=>a%2==0).sort((a,b)=>a-b);
// var oarray = nums4.filter(a=>a%2!=0).sort((a,b)=>a-b);
// var narray = earray.concat(oarray);

// console.log((nums4.sort(a,b) => ((a%2)-(ab%2)) || a-b));
// console.log(narray)

//slice()
//splice()
//  does 3 things.
// `obtains particular range of array elements
//  then erases the sliced elements from the original array
//  and then, if desired, it will insert new elements on the original array where the elements were erased

var nsplice=nums4.splice(2,5, 1000, 300)
console.log(nsplice);
console.log(nums4);


// es6 array methods
// Find and find index()  they take a call back function
console.log(nums4.findIndex(a=>a%2==0));

msplice=nums4.splice(nums4.find(a=>a==34),5);
console.log(msplice);


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
        price:1200
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245,
        price:1200
    
    }];
    
//      1.sort the above array object based on the id asc?
//  	2.create a new array consisting of book titles only?
//  	3.Calculate the total sum of books?
//  	4.take a price from users and get all books that are priced above the user input?


// library = library(library.sort((a.libraryID,b.libraryID)=>a - b));

console.log(library);

