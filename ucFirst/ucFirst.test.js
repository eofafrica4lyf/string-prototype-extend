const UcFirst = require('./ucFirst');

describe('ucFirst function returns the string in question but changes the First Character to an Upper case',()=>{
    it('Case 1: changing "qwerty" to "Qwerty',()=>{
        expect(UcFirst('qwerty')).toBe('Qwerty');
    });
});