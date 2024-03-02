/* EARLAN JOSH SABILLANO
FOR MARCH 2, 2024 / CS36

the plan
0. Detect for multiple sentences. Check for punctuation

1. Remove and store punctuation

2. Uncapitalize all
Reason: Understanding the difference between proper and common nouns
increases the scope of the project. 

// Convert to list and reverse here //

3. Recapitalize & add punctuation & convert back to string
*/

function reverseText() {
    let punctuation;
    let sentence = document.getElementById("input").value;
    // Trapping
    // 0
    let isOneSentence = isThereOneSentence(sentence);
    console.log("isOneSentence:" + isOneSentence);    

    if (isOneSentence) {

        // 1
        // refer to isOneSentence return for explaination
        
        // console.log(sentence);
        if (isOneSentence != 1) {  // 1 means there is no punctuation but it is one sentence
            let results = removeAndReturnPunctuation(sentence);
            sentence = results[0];
            punctuation = results[1]
        }
        // console.log(sentence);
        // console.log(punctuation);

        // 2
        sentence = unCapitalizeSentence(sentence);
        

        // Convert to List and Reverse
  
        list = sentence.split(" ");
        console.log(list);
        document.getElementById("results").innerHTML = 
        `
        <div>   
        <p id="rev"></p>
        </div>
        `
        // https://www.geeksforgeeks.org/reverse-an-array-in-javascript/
        list.reverse();

        // 3
        sentence = list.join(" ");
        sentence = capitalizeFirstWord(sentence);
        sentence += punctuation;
        document.getElementById("rev").innerHTML = sentence;

    } else
    {
     // Trap Case   
    } 
}

// 0
function isThereOneSentence(sentence) {
     // Code from https://www.tutorialspoint.com/count-total-punctuations-in-a-string-javascript
     // Start Copied Code
     const countPunctuation = sentence => {
        const punct = "!,\;\.-?";
        let count = 0;
        for(let i = 0; i < sentence.length; i++){
        if(!punct.includes(sentence[i])){
            continue;
        };
        count++;
        };
        return count;
    };
    // End Copied Code

    // Returns punctuation if there is one sentence and it ends with punctuation
    // Returns number if sentence but no punctuation
    let count = countPunctuation(sentence);
    if (count == 1) {
        if (sentence.endsWith(".") || sentence.endsWith("!") || sentence.endsWith(";") || sentence.endsWith("-") || sentence.endsWith("?")) {
            return sentence.length - 1;
        } // returns true
    } else if (count == 0) {
        return 1;
    } else {
        return false;
    }
}

// 1
function removeAndReturnPunctuation(sentence) {
    if (sentence) {
        let punctuation = sentence[sentence.length - 1];
        let sentenceRemovedPunct = sentence.slice(0, -1);
        return [sentenceRemovedPunct, punctuation];
    }
}

// 2
function unCapitalizeSentence(sentence) {
    if (sentence) {
        return sentence.toLowerCase();
    }
}

// 3
function capitalizeFirstWord(sentence) {
    // https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);

}
