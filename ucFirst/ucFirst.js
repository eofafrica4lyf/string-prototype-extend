require('../toUpper/toUpper');

String.prototype.ucFirst = function(){
    var firstCap = ''; 
    var upperCase = '';
    var regexTest = /[a-z]/;
    for(var index = 0; index <this.length; index++){
        if(index === 0 && regexTest.test(this[index]) === true) {
            upperCase = this[index].toUpper();
            firstCap+=upperCase; 
        }else{
            firstCap+=this[index]; 
        }
    }
    return firstCap;
}