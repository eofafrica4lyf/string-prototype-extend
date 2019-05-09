String.prototype.toUpper = function(){
    var upperCase = '', asciiCode = 0;
    var regexTest = /[a-z]/;
    for(var index = 0; index < this.length; index++){
        if(regexTest.test(this[index]) === true){
            asciiCode = this.charCodeAt(index) - 32;
            upperCase+=String.fromCharCode(asciiCode);
        }else{
            upperCase+=this[index];
        }
    }
    return upperCase;
}
