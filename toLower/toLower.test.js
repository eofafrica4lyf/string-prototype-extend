require('./toLower');

describe('toLower function returns the string but with all string characters in Lower Case',()=>{
    it('Case 1: changing QWERTY to lower case',()=>{
        expect("QWERTY".toLower()).toBe("qwerty");
    });
    it('Case 2: changing 123,4/56 to lower case',()=>{
        expect("123,4/56".toLower()).toBe("123,4/56");
    });
}); 