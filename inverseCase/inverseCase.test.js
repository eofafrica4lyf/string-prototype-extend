require('./inverseCase');

describe('inverseCase function that eturns each letter in the string as an inverse of its current case ',()=>{
    it('Case 1: "Mr. Ben" returns "mR. bEN"',()=>{
        expect('Mr. Ben'.toCurrency()).toEqual('mR. bEN');
    });
});