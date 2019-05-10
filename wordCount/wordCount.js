require('../words/words');

//wordCount function returns the number of words in the string
String.prototype.wordCount = function(){
    var words = this.words();//uses the 'word' method to extract all words in the string in an array
    return words.length;//get the length of the array.
}