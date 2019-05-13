require('../fromCurrency/fromCurrency');

describe('fromCurrency function returns a number representation of the currency String',()=>{
    it('Case 1: "11111.11" returns "11,111.11"',()=>{
        expect('11,111.11'.fromCurrency()).toEqual('11111.11');
    });
});