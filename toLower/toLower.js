String.prototype.toLower = function(){
    var lowerCase = '', asciiCode = 0;
    var regexTest = /[A-Z]/;
    for(var index = 0; index < this.length; index++){
        if(regexTest.test(this[index]) === true){
            asciiCode = this.charCodeAt(index) + 32;
            lowerCase+=String.fromCharCode(asciiCode);
        }else{
            lowerCase+=this[index];
        }
    }
    return lowerCase;
}
