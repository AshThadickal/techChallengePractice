// create a function that takes a string and returns whether it is a pallindrone

const pallindrone = (word) => {
    // take in a string and spread it in an array
    // once spread, reverse the direction
    // once spread, join the array and compare with the original 

    // should ensure we have error handling and/or ensure user input is transformed to a string
    const makeAString = word.toString()
    console.log(makeAString)
    const backwardsWord = [...makeAString].reverse().join('');
    console.log(backwardsWord)
    if(makeAString === backwardsWord) {
        return true
    } else  {
        return false
    }
}

const isItSo = pallindrone('racecar');
console.log(isItSo);

// define a function that takes an array of strings and returns the most commonly occuring string in the array (reduce method?)

const mostWords = (array) => {
    const wordObj = {}; // this will house the words as keys with the amount of the word to be the value
    let mostFrequent = 0; // this is used to keep tract of how many times the most frequent string occurs
    let mostWord = []; // this array will contain the string that occurs the most in the array

    array.forEach(word => {
        // if the wordObj have a key that exists with that word? If no, add it as a key with a value of 1; if yes, increase the value by one;
        if(!wordObj[word]) {
            wordObj[word] = 1;
        } else {
            wordObj[word]++;
        }

        if(wordObj[word] > mostFrequent) {
            mostFrequent = wordObj[word];
            mostWord = [word];
        } else if (wordObj[word] === mostFrequent) {
            mostWord.push(word);
        }
    });
    
    return mostWord

}

const theMostWord = mostWords(['all', 'the', 'time', 'eye', 'all', 'all', 'time', 'eye', 'all']);
console.log(theMostWord);
