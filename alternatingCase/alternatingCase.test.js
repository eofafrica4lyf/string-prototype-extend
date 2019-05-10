require('./alternatingCase');

describe('alternatingCase function that returns the letters in alternating cases',()=>{
    it('Case 1: "Onomatopoeia" returns "oNoMaToPoEiA"',()=>{
        expect('Onomatopoeia'.alternatingCase()).toEqual('oNoMaToPoEiA');
    });
    it('Case 2: "ONOMATOPOEIA" returns "oNoMaToPoEiA"',()=>{
        expect('ONOMATOPOEIA'.alternatingCase()).toEqual('oNoMaToPoEiA');
    }); 
});  