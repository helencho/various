// Write a function `hipsterfy(sentence)` that takes takes a string containing
// several words as input. Remove the last vowel from each word. 

function hipsterfy(str) {
  var strArr = str.split(" ");
  var ans = [];
  for (let i = 0; i < strArr.length; i++) {
    var reversed = strArr[i].split("").reverse().join("");
    var takeVowel = reversed.replace(/[aeiou]{1}/, "");
    ans.push(takeVowel.split("").reverse().join(""));
    
  }
  return ans.join(" ");
}

console.log(hipsterfy("abcd"));
console.log(hipsterfy("bbbbbccccdddd")); 
console.log(hipsterfy("hesssssse abbbbb")); 
console.log(hipsterfy("proper")); // => "propr"
console.log(hipsterfy("proper tonic panther")); // => "propr tonc panthr"
console.log(hipsterfy("towel flicker banana")); // => "towl flickr banan"
console.log(hipsterfy("runner anaconda")); // => "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries")); // => "turtl cheeseburgr fris"