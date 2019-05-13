require('../inverseCase/inverseCase');

describe('innuverseCase function that returns each letter in the string as an inverse of its current case ',()=>{
    it('Case 1: "Mr. Ben" returns "mR. bEN"',()=>{
        expect('Mr. Ben'.inverseCase()).toEqual('mR. bEN');
    });
});