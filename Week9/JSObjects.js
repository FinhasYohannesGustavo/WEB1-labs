// This is how we define objects in java script
var Chair={
    color: 'Red',
    width: 8,
    length: 9,
    price: '$50',
    material: 'Ebony Wood', 
    area: function(){
        return (this.width*this.length)/2;
    }
}
console.log(Chair.area());
// using dot notiation
console.log(Chair.color);

// using square bracket
let str='color'
console.log(Chair['color']);

console.log(Chair[str]);

Chair.name='nice';

console.log(Chair.name);


// Object initialization

// var Animal=new Object();
// Animal.name='cat';
// console.log(Animal.name);


// Object constructor
// this can be a blue print for many object of the same type

function Animal(name,color){
    this.name=name;
    this.color=color;
    this.speed=function(){
        return 'speed of' + ' ' +this.name;
    }
}

var cat1 = new Animal('garfield','white');
var dog = new Animal('bob','black');
dog.age=90;

cat1.speed=function(){
    return 'cat speed'
}

console.log(dog.color);
console.log(dog.speed());
console.log(cat1.speed());


function Vehicle(name,color,distance,time){
    this.name=name;
    this.color=color;
    this.distance=distance;
    this.time=time;
    this.speed=function(){
        return 'The speed of this vehicle is '+' '+ distance/time;
    }
}

var car1 = new Vehicle('gustav','green',100,10);
var motor1 = new Vehicle('motor 20','blue',200,10);

car1.steer=function(){
    return this.name + ' ' + 'is steering'
}

var steerMotor= car1.steer.bind(motor1);


console.log(car1.speed());
console.log(motor1.speed());

console.log(car1.steer());
console.log(steerMotor());


class Animals{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    firstName(){
        return this.name;
    }
}

class Person extends Animals{
    constructor(name,age,color){
        super(name,age)
        this.color=color
    }
    fullName(){
        return super.firstName() +' '+ this.color;
    }
}

var finhas1 = new Person('finhas',20,'blue');

console.log(finhas1.fullName());

// In java script in primitive types only the values change string  

// In java script classes,function and arrays have refrence types


// object destruction

var obj={
    names:'abebe',
    age:78
}

var {names,ages}=obj;

console.log(names,ages)


var obj2={color:'blue'}
var obj3 = Object.assign(obj,obj2)
console.log(obj3)


// deleting object properties

delete obj3.color
console.log(obj3)

for(let keys  in obj3){
    console.log(keys)
}









