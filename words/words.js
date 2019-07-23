// words function returns a list of the words in the string, as an array
String.prototype.words = function () {
    // regex pattern to match individual words from the string
    var regexTest = /(\b\w+\b)+/g;
    //extract all words from the string using the regex pattern
    var wordMatches = this.match(regexTest);
    var words = [];
    // Check each element of the array provided by the match method to see that it exists, or contains something, then add the element to the array of strings
    for(index = 0;;index++){
        if(wordMatches[index] === undefined){
            break;
        }else{
            words.push(wordMatches[index]);
        }
    }
    return words;
}
