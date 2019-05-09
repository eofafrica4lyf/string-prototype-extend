const ToLower = require('./toLower');

describe('toLower function returns the string but with all string characters in Lower Case',()=>{
    it('Case 1: changing QWERTY to lower case',()=>{
        expect(ToLower("QWERTY")).toBe("qwerty");
    });
    it('Case 2: changing 123,4/56 to lower case',()=>{
        expect(ToLower("123,4/56")).toBe("123,4/56");
    });
}); 