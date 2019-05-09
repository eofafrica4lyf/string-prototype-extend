String.prototype.toCurrency = function (){
    var wholeNum = 0;
    var currencyString = '';
    var regexTest = /(\d*)(?=\.\d*)/;
    var decimal = /(?=\d*)(\.\d*)/;
    var decimalString = '';
    wholeNum = this.match(regexTest);
    decimalString = this.match(decimal);

    var addToIndex = wholeNum[0].length % 3;
    for(index = 0; index < wholeNum[0].length; index++){
        if(addToIndex === 2 && index % 3 === 2){
            currencyString+=',';
        }
        if(addToIndex === 1 && index % 3 === 1){
            currencyString+=',';
        }
        if(addToIndex === 0 && index % 3 === 0 && index !== 0){
            currencyString+=',';
        }
        currencyString+=wholeNum[0][index];
    }
    return currencyString + decimalString[0];
}

console.log('111111111111111.11'.toCurrency());