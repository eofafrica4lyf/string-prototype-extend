require('../toCurrency/toCurrency');

describe('toCurrency function returns a currency representation of the String',()=>{
    it('Case 1: "11111.11" returns "11,111.11"',()=>{
        expect('11111.11'.toCurrency()).toEqual('11,111.11');
    });
    it('Case 2: "1111111111.11" returns "1,111,111,111.11"',()=>{
        expect('1111111111.11'.toCurrency()).toEqual('1,111,111,111.11');
    });
    it('Case 3: "11111111.11.11" returns "Wrong Input"',()=>{
        expect('11111111.11.11'.toCurrency()).toEqual('Wrong Input');
    });
    it('Case 4: "111111111.11" returns "111,111,111.11"',()=>{
        expect('111111111.11'.toCurrency()).toEqual('111,111,111.11');
    });
});