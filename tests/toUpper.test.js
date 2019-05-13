require('../toUpper/toUpper');

describe('toUpper function returns the string but with all string characters in Upper Case',()=>{
    it('Case 1: changing "qwerty" to upper case',()=>{
        expect("qwerty".toUpper()).toBe("QWERTY");
    });
    it('Case 2: changing "qwer93049./s=ty" to upper case',()=>{
        expect("qwer93049./s=ty".toUpper()).toBe("QWER93049./S=TY");
    });
});