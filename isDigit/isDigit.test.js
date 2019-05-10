require('./isDigit');

describe('isDigit function returns true if the number is a single digit ',()=>{
    it('Case 1: "2" returns "true"',()=>{
        expect('2'.isDigit()).toBeTruthy();
    });
});