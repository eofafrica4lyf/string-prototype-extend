require('../words/words');

describe('words function returns a list of the words in the array as an array',()=>{
    it('Case 1: Test "How many words are here?"',()=>{
        expect('How many words are here'.words()).toEqual(['How','many','words','are','here']);
    });
    it('Case 2: Test "How many words, are now here; since we\'ve added some more?"',()=>{
        expect('How many words, are now here; since we\'ve added some more?'.words()).toEqual(['How', 'many', 'words', 'are', 'now', 'here', 'since', 'we', 've', 'added', 'some', 'more']);
    });
});