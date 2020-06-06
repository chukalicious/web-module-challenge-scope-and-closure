// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * //@param stringList an array of strings.
 * //@param callback function that takes a string as its argument.
 * //@returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/

let list = ['foo', 'bar']
console.log(list); 

function processFirstItem(stringList, callback) {
  return callback(stringList[0])

}
processFirstItem(list, addString)

function isStrictMode() {
  return (typeof this == 'undefined');
}
console.log(isStrictMode()) //sneaky, sneaky

function addString(str) {
  return str + str; 
}
/* console.log(addString(list[0])); */


// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * counter 2 is hoisted and returning a value, counter 1 is not hoisted nor returning anything
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * counter 2 is using a closure, counter 1 is not returning a value or perforing any function. Has an inner function named counter() that is not being called anywhere
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * counter 2 is good if I want to return a value
 *
*/

// counter1 code

function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}
const counter1 = counterMaker();
/* console.log(counter1);  */

// counter2 code
let count = 0;

function counter2() {
  return count++;
}
counter2(); 

console.log(count); 


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */



//let HomeVsAway = [{home: 0, away: 0}]; 



//let HomeVsAway = [{home: 0, away: 0}]; 

function inning(){
  return Math.floor(Math.random() * 20) + 1; 
}
/* console.log(inning()); */

//let HomeVsAway = [{home: 0, away: 0}]; 

function finalScore(turns){
  let HomeVsAway = [{home: 0, away: 0}]; 
  let score = 0;
  for (var i = 0; i < turns; i++) { 
    let random = inning(); 
    let newInning = inning(); 
    //you need to make 2 random numbers. good luck with that!
    HomeVsAway[0].home = score + random;
    HomeVsAway[0].away = score + newInning; 
  }
  return HomeVsAway; 
}
console.log(finalScore(3)); 

let random = Math.floor(Math.random() * 2) + 1;



/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 


/* function finalScore(turns, callback){
  let score = 0;
  for (var i = 0; i < turns; i++) {
    callback; 
    score = score + callback; 
    console.log(score); 
  }
  return score; 
}
console.log(finalScore(3, inning())); */ 


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(/* CODE HERE */) {
  /* CODE HERE */
}


