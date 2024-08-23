import {capitalise} from './practice';

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