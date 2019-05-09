require('../words/words');

String.prototype.wordCount = function(){
    var words = this.words();
    return words.length;
}