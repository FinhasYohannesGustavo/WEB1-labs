//var input = prompt('enter your name');
//var check = Confirm(`Are you sure your name is ${input}`);
//check?alert(`thank you ${input}`): alert('you are a liar');


function template(a){
    let num=0;
    for(let i=0; i<arguments.length;i++){
        num+=arguments[i];
        
   }
    return num/arguments.length;
}

// Check whether the num is a prime or not
function isPrime(a){
    
    for(let i=3; i<a;i++){
        if(a%i==0){
            return false;
        }
        
   }
    return true;
}
 console.log(isPrime(11));

//  Person class

class Individual{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    nameAge(){
        return this.name + ' '+ this.age;
    }
   
}

class Person extends Individual{
    constructor(name,age,country){
        super(name,age)
        this.country=country;
    }
    personDetails(){
        return super.nameAge() +' '+ this.country;
    }
}

var finhas = new Person('Finhas',20,'Ethiopia');
var george = new Person('George','30','Germany');

console.log(finhas.personDetails());
console.log(george.personDetails());


// Bank Account Class

class BankAccount extends Individual{
    constructor(name,age,initialDeposit){
        super(name,age);
        this.Account =initialDeposit;
    }
    accountDetails(){
        return super.nameAge() +'has cash of: '+ this.Account;
    }

    depositMoney(amount){
        this.Account+=amount;
    }
    withdrawMoney(amount){
        this.Account-=amount;
    }
}

var finhasAccount = new BankAccount('Finhas',20,300);
console.log(finhasAccount);
finhasAccount.depositMoney(200);
console.log(finhasAccount);
finhasAccount.withdrawMoney(100);
console.log(finhasAccount);

// Book Class

class Book{
    constructor(title,author,publicationYear){
        this.title=title;
        this.author=author;
        this.publicationYear=publicationYear;
    }
    displayBook(){
        return this.title + ' '+ this.author+ " "+this.publicationYear;
    }
   
}

class Ebook extends Book{
    constructor(title,author,publicationYear,bookPrice){
        super(title,author,publicationYear)
        this.bookPrice=bookPrice;
    }
    displayBook(){
        return this.title + ' '+ this.author+ " "+this.publicationYear+" "+this.bookPrice;
    }
}


var book1= new Book('Lord of the wrings','Finhas',1999);
var ebook1= new Ebook('Romeo and Julliet','Shakespeare',1898,450);

console.log(book1.displayBook());
console.log(ebook1.displayBook());

// Array to find the second largest and second smallest

let nums= new Array(9,6,8,10,4,5);


function findSecondSmallestLargest(a){
    var len = a.length
    for(var i =0;i<a.length;i++){
        var num = a[i];
        for(var j=i+1; j<a.length;j++){
            if(a[j]<a[i]){
                var temp = a[j];
                a[j]=a[i];
                a[i]=temp;
            }
        }
    }
    if(a.length<2){
        return a[0];
    }
    if(a.length<4){
        return a[1];
    }
    return a[1] + " "+ a[len - 2];
}

console.log(findSecondSmallestLargest(nums))


// Join all the elements of array into string

myColor = ["Red", "Green", "White", "Black"];
var allColors=" ";

for(var i = 0; i<myColor.length;i++){
    allColors+=(myColor[i]);
    allColors+='+';
}

console.log(allColors);