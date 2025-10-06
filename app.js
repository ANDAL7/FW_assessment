let a = 10; //declaration
let b = 1;

console.log("10" - "10ggg");
a = 20;  //assign
a = 25; //reassign

const personName = "AT";

console.log(personName);

let msg = "likes apple";

console.log(10 == "10");

if("1"){
    console.log(true);
}else{
    console.log(false);
}

//primitive

const string = "aaaaa";
const number = 44444;
const boolean = true;

//non-primitive
//array
//objects - dictionary

const array = ["apple" , "mango" , "grapes"];
console.log(array.length);
console.log(array.push(11));
console.log(array);
console.log(array.pop());
console.log(array);

const content = array.slice(1,3);
console.log(array,content);

array.splice();

const obj = {
    fruit:"orange",
    quy:10
};

console.log(obj);
console.log(obj["fruit"]);

let test = "fruit";
console.log(obj[test]);
obj.isGood = true;

const ant = [10 , 20];
const bat = ant;

if (ant == bat){
    console.log(true);
}else{
    console.log(false);
}

bat[2] = 100;

console.log(ant);

god("WE100");

function god(us){
    if (typeof us == "string"){
        console.log(us);
    }else{
        console.log(false);
    };
};

let num_1 = prompt("Enter a number");
let num_2 = prompt("Enter a number");

num_1 = Number(num_1);
num_2 = Number(num_2);

console.log(num_1 + num_2);

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Example
let numbers = [1, 5, 9, 10];
console.log("Sum =", sumArray(numbers));

function countOddEven(arr) {
    let odd = 0, even = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0)
            even++;
        else
            odd++;
    }

    return { odd, even };
}

// Example
let nums = [1, 2, 3, 4, 5, 6];
let result = countOddEven(nums);
console.log(Odd: ${result.odd}, Even: ${result.even});

function capitalizeWords(str) {
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

// Example
let text = "hello world from javascript";
console.log("Capitalized:", capitalizeWords(text));