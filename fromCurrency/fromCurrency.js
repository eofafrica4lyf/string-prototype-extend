String.prototype.fromCurrency = function () { 
    var regex = /(\,)/g;
    return this.replace(regex,'');
}