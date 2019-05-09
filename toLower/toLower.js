let toLower = function(testString){
    var lowerCase = '', asciiCode = 0;
    let regexTest = /[A-Z]/;
    for(var index = 0; index < testString.length; index++){
        if(regexTest.test(testString[index]) === true){
            asciiCode = testString.charCodeAt(index) + 32;
            lowerCase+=String.fromCharCode(asciiCode);
        }else{
            lowerCase+=testString[index];
        }
    }
    return lowerCase;
}

module.exports = toLower;