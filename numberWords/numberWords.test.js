require('./numberWords');

describe('numberWords function returns the numbers in words ',()=>{
    it('Case 1: "325" returns "three two five"',()=>{
        expect('325'.numberWords()).toEqual('three two five');
    });
});