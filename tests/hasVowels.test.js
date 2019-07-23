require("../hasVowels/hasVowels");

describe("hasVowel function returns true if the input string contains one or more vowels", () => {
  test('Case 1: "a"', function() {
    expect("a".hasVowels()).toBeTruthy();
  });
  test('Case 2: "vhnty"', () => {
    expect("vhnty".hasVowels()).toBeFalsy();
  });
  test('Case 3: "aerneov"', () => {
    expect("aerneov".hasVowels()).toBeTruthy();
  });
});
