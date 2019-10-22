let words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    "donuts",
    "coconuts",
    "beefcake"
];
let word = words[Math.floor(Math.random()* words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++){
    answerArray[i]= "_"
}
let remainingLetters = word.length;

while(remainingLetters > 0){
    alert(answerArray.join(" "));
    let guess = prompt("Guess a letter, or click Cancel to stop playing.");
if (guess === null) {
break;
 } else if (guess.length !== 1) {
alert("Please enter a single letter.");
} else {
// Update the game state with the guess
    for (let x = 0; x < word.length; x++) {
 if (word[x] === guess) {
answerArray[x] = guess;
 remainingLetters--;
}
}
}
}
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);