require('./words');

describe('words function returns a list of the words in the array as an array',()=>{
    it('Case 1: Test "How many words are here?"',()=>{
        expect('How many words are here'.words()).toEqual(['How','many','words','are','here']);
    });
});