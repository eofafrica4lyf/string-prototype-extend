//fromCurrency returns a number representation of the Currency String
String.prototype.fromCurrency = function () { 
    var regex = /(\,)/g;//Regex pattern to extract all comma characters in the string
    return this.replace(regex,'');//replace all comma characters by empty string
}