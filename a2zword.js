//Mike Kearl - Email: mike.kearl@gmail.com - Phone: 469-534-2216
//Version: 1.0  Oct 2nd, 2023
//####################################################
//Pure JavaScript code test for A2Z Port
//####################################################

// This code defines two functions and then tests those fuctions: 

//findLongestWord: 
//------------------
//iterates through the words in the sentence, 
//keeping track of the longest word and the number of vowels in that word. 

//countVowels:
//------------------
//counts the number of vowels in a given word.

//Methodology and Assumptions and Approach
//----------------------------------------------------------------------------------
// For this relatively straightforward code, I've chosen a direct testing approach.

// This includes typical cases, edge cases, and potential exceptions.

// Scenarios Covered:
//----------------------------------------------------------------------------------
// Different sentence lengths have been tested.
// Special characters have been included in the test cases.
// I've tested with empty strings and sentences with no valid words.
// Additionally, the code has been evaluated for how it handles mixed-case input.
// Comprehensive Reliability:
// This straightforward yet comprehensive approach ensures reliable performance.
// It provides robust functionality across a wide range of scenarios.
// If further testing was needed I could a framework such as jest.js or provide mocking fuctionality.


function findLongestWord(sentence) {
    let words = sentence.match(/[a-zA-Z]+/g);
    if (!words) return null;

    let longestWord = '';
    let maxVowels = 0;

    for (let word of words) {
        const currentVCount = countVowels(word);
        if (word.length > longestWord.length || 
            (word.length === longestWord.length && currentVCount > maxVowels)) {
            longestWord = word;
            maxVowels = currentVCount;
        }
    }
    return longestWord;
}

function countVowels(word) {
    return (word.match(/[aeiou]/gi) || []).length;
}

function runTests() {
    let testCases = [
        // Test Cases
        "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers",
        "Mike Kearl is a great person to work with.",
        "Always strive to learn and edify.",
        "Words with - thank-you thanks wonder-ful w0w-za",
        "12345 !@#$%^", //numbers and letters
        "",//no valid words
        "mIxEd CaSeS",
        "Hello123 !@# World",
        "Hello#World$How^Are*You",
    ];

    testCases.forEach((testCase) => {
        let result = findLongestWord(testCase);
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(testCase);
        //console.log(`Sentence: "${testCase}"`);
        console.log(`Result: ${result}`);
        
    });
}

runTests();
