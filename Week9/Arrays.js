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

// numsOdd= nums3.forEach(a=>!(a%2==0));
// numsEven = nums3.forEach(a=>a%2==0);

var oddAdd=0;
var evenAdd=0;
nums3.forEach(a=>a%2==0?evenAdd+=a:oddAdd+=a);

console.log(oddAdd);
console.log(evenAdd);