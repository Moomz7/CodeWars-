// // n this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// // Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// // function move (position, roll) {
// //     return position + roll*2
// //   }

// // Nathan loves cycling.

// // Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// // You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// // function litres(time) {
// //   return Math.floor(time * 0.5)
// // }

// //Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// // function solution(nums){
// //     return (nums || []).sort(function(a, b){
// //       return a - b
// //     });
// //   }

// // Clock shows h hours, m minutes and s seconds after midnight.

// // Your task is to write a function which returns the time since midnight in milliseconds.

// // function past(h, m, s){
// //     return ((h*3600)+(m*60)+s)*1000;
// //   }

// // Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// // The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// // Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// // Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

// // Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

// // Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

// // function calculateYears(principal, interest, tax, desired){
// //     let years = 0;
// //     while(principal < desired){
// //         principal += (principal * interest) * (1 - tax);
// //         years++
// //     }
// //     return years;
// // }

// // Create a function which answers the question "Are you playing banjo?".
// // If your name starts with the letter "R" or lower case "r", you are playing banjo!

// // The function takes a name as its only argument, and returns one of the following strings:

// // name + " plays banjo" 
// // name + " does not play banjo"
// // Names given are always valid strings.

// // function areYouPlayingBanjo(name) {
// //     if(name[0] === "r" || name[0] === "R"){
// //        return `${name} plays banjo`;
// //     }else{
// //       return `${name} does not play banjo`
// //     }
   
// //   }

// // We need a function that can transform a string into a number. What ways of achieving this do you know?

// // Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// // const stringToNumber = function(str){
// //     return Number(str)
// //   }

// // Code as fast as you can! You need to double the integer and return it.

// // function doubleInteger(i) {
  
// //     return i*2;
// //   }

// // Count the number of divisors of a positive integer n.

// // Random tests go up to n = 500000, but fixed tests go higher.

// // function getDivisorsCnt(n){
// //     let num=0;
// //     if( n==1 ) return 1;
// //     if( n%Math.sqrt(n)==0 ) num++;
// //     for( var i=1;i<Math.sqrt(n);i++ ){
// //         if( n%i==0 ){
// //             num+=2;
// //         }
// //     }
// //     return num;
// // }

// // Story
// // Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// // Task
// // Write a function that returns both the minimum and maximum number of the given list/array.

// // function minMax(arr) {
// //     let min = Math.min(...arr);
// //     let max = Math.max(...arr);
// //     return [min, max];
// //   }
// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

// function testEven(n) {
//     if( n%2 == 0){
//       return true
//     }else{
//       return false
//     }
// }

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// function friend(friends) {
//     return friends.filter(name => name.length === 4);
//   }