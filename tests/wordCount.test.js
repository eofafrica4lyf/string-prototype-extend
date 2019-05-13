require('../wordCount/wordCount');

describe('wordCount function counts the number of words in the string',()=>{
    it('Case 1: Test "How many words are here?"',()=>{
        expect('How many words are here'.wordCount()).toEqual(5);
    });
    it('Case 2: Test "How many words, are now here; since we\'ve added some more?"',()=>{
        expect('How many words, are now here; since we\'ve added some more?'.wordCount()).toEqual(12);
    });
});