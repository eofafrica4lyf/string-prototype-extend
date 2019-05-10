require('./isDigit');

describe('isDigit function returns true if the number is a single digit ',()=>{
    it('Case 1: "2" returns "true"',()=>{
        expect('2'.isDigit()).toBeTruthy();
    });
    it('Case 1: "34" returns "false"',()=>{
        expect('34'.isDigit()).toBeFalsy();
    });
});