// take a sentence as input
/*
const sentence = "This is a sample sentence.";

// reverse the input sentence
const reversedSentence = sentence.split(" ").reverse().join(" ");

// capitalize the start of the sentence
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

console.log(capitalizedSentence);
*/
const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];    


 // As an illustration, pull names out of the data array  
const names = data.flatMap(arr => arr.map(obj => obj.name));
console.log(names);