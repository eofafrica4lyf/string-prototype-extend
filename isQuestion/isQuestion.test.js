require('./isQuestion');

describe('isQuestion function returns true is the string ends with a question mark "?"',()=>{
    it('Case 1: Testing ""qwerty?" to see if it\'s a question',()=>{
        expect("qwerty?".isQuestion()).toBeTruthy();
    });
});