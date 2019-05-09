require('./wordCount');

describe('wordCount function counts the number of words in the string',()=>{
    it('Case 1: Test "How many words are here?"',()=>{
        expect('How many words are here'.wordCount()).toEqual(5);
    });
});