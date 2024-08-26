import {capitalise, reverseString, calculator} from './practice';

test('Capitalise single characters, expect \'a\' to return \'A\'', () =>{
    expect(capitalise('a')).toBe('A');
})

test('Capitalise string, expect \'a string\' to return \'A string\'', () => {
    expect(capitalise('a string')).toBe('A string');
})

test('Capitalise string with multiple letters in the first word, expect \'an idea\' to return \'An idea\'', () =>{
    expect(capitalise('an idea')).toBe('An idea');
})

test('Returns capital when first letter is already capitalised', () =>{
    expect(capitalise('Already done')).toBe('Already done');
})

test('Returns a reversed string from \'text\' to \'txet\'', () => {
    expect(reverseString('text')).toBe('txet');
})

test('Returns a reversed string from \'example here\' to \'ereh elpmaxe\'', () => {
    expect(reverseString('example here')).toBe('ereh elpmaxe');
})

test('Returns a reversed string with numbers \'123 text here\' to equal \'ereh txet 321\'', () => {
    expect(reverseString('123 text here')).toBe('ereh txet 321');
})

test('Returns a reversed string with capitals from \'Quote\' to \'etouQ\'', () => {
    expect(reverseString('Quote')).toBe('etouQ');
})

test('Does calculator exist?', () => {
    expect(typeof calculator).toBe('object');
})

test('2 + 2 equals 4', () => {
    expect(calculator.add(2, 2)).toBe(4);
})

test('2 + -2 equals 0', () => {
    expect(calculator.add(2, -2)).toBe(0);
})