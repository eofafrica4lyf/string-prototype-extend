require('../toCurrency/toCurrency');

describe('toCurrency function returns a currency representation of the String',()=>{
    it('Case 1: "11111.11" returns "11,111.11"',()=>{
        expect('11111.11'.toCurrency()).toEqual('11,111.11');
    });
    it('Case 1: "1111111111.11" returns "1,111,111,111.11"',()=>{
        expect('1111111111.11'.toCurrency()).toEqual('1,111,111,111.11');
    });
    it('Case 1: "11111111.11.11" returns "1,111,111,111.11"',()=>{
        expect('11111111.11.11'.toCurrency()).toEqual('Wrong Input');
    });
});