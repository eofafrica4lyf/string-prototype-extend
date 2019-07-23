// inverseCase function returns each letter in the string as an inverse of its current case
String.prototype.inverseCase = function () { 
    // inverseCase is the final string array that contains the 'inversed' string; asciiCode contains the ASCII equivalent of a character
    var inverseCase = '', asciiCode = 0;
    // this pattern extracts only letters, both upper and lower case
    var regexTest = /[a-z]/i;
    for(var index = 0; index < this.length; index++){
        // For each character, check that it's a letter and also whether it's uppercase of lowercase, then invert; if it's not a letter, just add without transforming it.
        if(regexTest.test(this[index]) === true && this.charCodeAt(index) >= 97){
            asciiCode = this.charCodeAt(index) - 32;
            inverseCase+=String.fromCharCode(asciiCode);
        }else if(regexTest.test(this[index]) === true && this.charCodeAt(index) < 97){
            asciiCode = this.charCodeAt(index) + 32;
            inverseCase+=String.fromCharCode(asciiCode);
        }else{
            inverseCase+=this[index];
        }
    }
    return inverseCase;
}
