//toLower returns the string in question but with all the characters in their lower cases as applicable.
String.prototype.toLower = function(){
    var lowerCase = '', asciiCode = 0;
    var regexTest = /[A-Z]/;//regex pattern to take in only uppercase letters only
    for(var index = 0; index < this.length; index++){
        //For each upper case character, get the ASCII position and add 32, then express the string as a word character
        if(regexTest.test(this[index]) === true){
            asciiCode = this.charCodeAt(index) + 32;
            lowerCase+=String.fromCharCode(asciiCode);
        }else{
            lowerCase+=this[index];//if the character is lower case or something else, just add it to the final string
        }
    }
    return lowerCase;
}
