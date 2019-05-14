// toCurrency returns a currency representation of the String
String.prototype.toCurrency = function () {
    var wholeNum = 0;
    var currencyString = '';
    // captures the right side of the decimal
    var regexTest = /(\d*)(?=\.\d*)/;
    // captures the left side of the decimal
    var decimal = /(?=\d*)(\.\d*)/;
    // checks if there is more than one period.
    var honeyPot = /(\d*)(\.\d*){2}(\.)*/;
    var decimalString = '';
    wholeNum = this.match(regexTest);
    decimalString = this.match(decimal);
    // First test if the string is in a wrong format e.g. it could have more than one period
    if (honeyPot.test(this) === true) { 
        return 'Wrong Input';
    }
    // Get the position in the string where the first comma is inserted
    var addToIndex = wholeNum[0].length % 3;
    for(index = 0; index < wholeNum[0].length; index++){
        // Use the addToIndex variable to determine the first and every other position where the comma is inserted
        if(addToIndex === 2 && index % 3 === 2){
            currencyString+=',';
        }
        if(addToIndex === 1 && index % 3 === 1){
            currencyString+=',';
        }
        if(addToIndex === 0 && index % 3 === 0 && index !== 0){
            currencyString+=',';
        }
        // Of course, keep adding the digit characters
        currencyString+=wholeNum[0][index];
    }
    return currencyString + decimalString[0];
}
