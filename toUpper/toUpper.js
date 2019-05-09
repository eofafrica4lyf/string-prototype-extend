let toUpper = function(testString){
    var upperCase = '', asciiCode = 0;
    let regexTest = /[a-z]/;
    for(var index = 0; index < testString.length; index++){
        if(regexTest.test(testString[index]) === true){
            asciiCode = testString.charCodeAt(index) - 32;
            upperCase+=String.fromCharCode(asciiCode);
        }else{
            upperCase+=testString[index];
        }
    }
    return upperCase;
}

module.exports = toUpper;