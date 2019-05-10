String.prototype.inverseCase = function () { 
    var inverseCase = '', asciiCode = 0;
    var regexTest = /[a-z]/i;
    for(var index = 0; index < this.length; index++){
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
console.log('Mr. Ben'.inverseCase());