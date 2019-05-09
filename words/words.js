String.prototype.words = function(){
    // var regexTest = /(\w)+.*?/;
    var regexTest = /(\b\w+\b)+/g;
    var wordMatches = this.match(regexTest);
    var words = [];
    
    for(index = 0;;index++){
        if(wordMatches[index] === undefined){
            break;
        }else{
            words.push(wordMatches[index]);
        }
    }
    return words;
}
