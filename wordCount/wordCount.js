require('../words/words');

// wordCount function returns the number of words in the string
String.prototype.wordCount = function(){
    // uses the 'word' method to extract all words in the string in an array
    var words = this.words();
    // get the length of the array.
    return words.length;
}
