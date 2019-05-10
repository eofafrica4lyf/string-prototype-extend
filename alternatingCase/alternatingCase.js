require('../toUpper/toUpper');
require('../toLower/toLower');

String.prototype.alternatingCase = function () { 
    var alternatingCase = '';
    var regexTest = /[a-z]/i;
    for(var index = 0; index < this.length; index++){
        alternatingCase+=(regexTest.test(this[index]) === true && index%2 === 0) ?   (this[index].toLowerCase()) : (this[index].toUpperCase());
    }
    return alternatingCase;
}