require('../ucFirst/ucFirst');

describe('ucFirst function returns the string in question but changes the First Character to an Upper case',()=>{
    it('Case 1: changing "qwerty" to "Qwerty',()=>{
        expect('qwerty'.ucFirst()).toBe('Qwerty');
    });
    it('Case 2: changing "1qwerty" to "1qwerty',()=>{
        expect('1qwerty'.ucFirst()).toBe('1qwerty');
    });
});