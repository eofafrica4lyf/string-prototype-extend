// toUpper function returns the string in question but with all characters in upper cases as applicable
String.prototype.toUpper = function(){
    var upperCase = '', asciiCode = 0;
    // regex pattern to match only lower case letter characters
    var regexTest = /[a-z]/;
    for(var index = 0; index < this.length; index++){
        // For each lower case character, get the ASCII position and add 32, then express the string as a word character
        if(regexTest.test(this[index]) === true){
            asciiCode = this.charCodeAt(index) - 32;
            upperCase+=String.fromCharCode(asciiCode);
        }else{
            // if the character is upper case or something else, just add it to the final string
            upperCase+=this[index];
        }
    }
    return upperCase;
}
