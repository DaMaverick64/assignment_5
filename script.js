1.	//Create a function that will be able to convert figures from Fahrenheit to Celsius.

const fToC = (x) => {
    if (typeof x !== "number") return "can only work with string" ; 
        fixedX = (x - 32) * (5/9) ;
        return fixedX.toFixed(4) ;
}       

console.log(fToC(300)) ;
//output = 148.8889

2.//	Create a function that will calculate the average of numbers in an array.

const avArr = (arr) =>
    Array.isArray(arr) ? arr.reduce((a,b) => a + b) /arr.length : NaN;

    console.log(avArr([1,2,3,4,5,100]).toFixed(2));
    //output = 19.17

 3. //Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.

const divisiblilityCheck = (n , x, y) =>
    n % x === 0 && n % y === 0 && n > 0 && y > 0 ? true : false ;

    console.log(divisiblilityCheck(4, 3, 12));
    // output = false

5.	//Create a function that will return a boolean specifying if a number is a prime number.

const isPrime = (n) =>{
    if (n < 0) return false ;
    if (n === 1) {
        return false ;
    }else if (n === 2) {
        return true ;
    }else{
        for(let i = 2 ; i < n ; i++) {
            if (n % i === 0) return false ;
        }
        return true ;
    }
 } ;

 console.log(isPrime(9))
// output = false

6.	//Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers

const isPositiveArr = (arr) => {
    if (!Array.isArray(arr) || arr.every((number) => Number.isNaN(number))) {
        return;
    }
    return arr.filter((number) => number > 0);
 };

 console.log(isPositiveArr(['hi' , -4 , 9 , 9 , 17 , 18]));
 // output = [9, 9, 9, 17, 18]

 7.	//Write a program that prints the numbers from 1 to 100. 
    //But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". 
    //For numbers which are multiples of both 3 and 5 prints "FizzBuzz".
 
 function fizzBuzz(n){
    for (let n=1 ; n <= 100 ; n++){
        if(n % 3 == 0 && n % 5 == 0){
            console.log('fizzbuzz')
        }
        else if (n % 3 == 0){
            console.log('fizz');
        }else if (n % 5 == 0){
            console.log('buzz');
        }else{
            console.log(n)
        }}}

        console.log(fizzBuzz(100))
  

 /*const generateHashtag = (inputString) => {
    const trimmed = inputString.trim();
    if (!trimmed) {
        return false;
    }

    const words = trimmed.split(' ');
    const hashTagWords = words.map(
        (word) =>word[0].toUpperCase() + word.slice(1)
    );
    const hashTag = '#${hashtagWords.join('')}' ;
    if (hashtag.length > 140) {
        return false;
    }
    return hashtag;
 };

 console.log(generateHashtag('is it working'))*/