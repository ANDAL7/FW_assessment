console.log("Sum of array");
function sumarr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let numbers = [2, 5, 8, 10];
console.log("Sum =", sumarr(numbers));


console.log("Count odd even");
let even=0
let odd=0
let arr_numbers = [1, 2, 3, 4, 5, 6];
for(let i=0;i<arr_numbers.length;i++){
    if(arr_numbers[i]%2===0){
        even=even+1
    }
    else{
        odd=odd+1
    }
}
console.log("Even count:"+even);
console.log("Odd count:"+odd);

console.log("Capital all the words first letter");
function capitalwords(str) {
    let words = str.split(' ');
    let res = '';
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 0) {
            res += word[0].toUpperCase() + word.slice(1).toLowerCase();
        }
        if (i < words.length - 1) {
            res += ' ';
        }
    }
    
    return res;
}
let text = "hello world from coding test";
console.log(text);
console.log(capitalwords(text));
