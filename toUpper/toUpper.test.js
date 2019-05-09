const ToUpper = require('./toUpper');

describe('toUpper function returns the string but with all string characters in Upper Case',()=>{
    it('Case 1: changing "qwerty" to upper case',()=>{
        expect(ToUpper("qwerty")).toBe("QWERTY");
    });
});