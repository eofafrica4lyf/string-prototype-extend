// fromCurrency returns a number representation of the Currency String
String.prototype.fromCurrency = function () { 
    // Regex pattern to extract all comma characters in the string
    var regex = /(\,)/g;
    // replace all comma characters by empty string
    return this.replace(regex,'');
}
