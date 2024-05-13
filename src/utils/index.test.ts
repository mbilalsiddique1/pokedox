// @ts-nocheck
import { capitalize, dreamWorld, generateAbbreviation } from './';

describe('capitalize function', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('')).toBe('');
    expect(capitalize(undefined)).toBe('');
  });
});

describe('dreamWorld function', () => {
  it('should replace ".png" with ".svg" in the URL if it ends with ".png"', () => {
    expect(dreamWorld('https://mbilal.me/sprites/pokemon/1.png')).toBe('https://mbilal.me/sprites/pokemon/other/dream-world/1.svg');
    expect(dreamWorld('https://mbilal.me/sprites/pokemon/2.png')).toBe('https://mbilal.me/sprites/pokemon/other/dream-world/2.svg');
  });

  it('should return the original URL if it does not end with ".png"', () => {
    expect(dreamWorld('https://mbilal.me/sprites/pokemon/1.svg')).toBe('https://mbilal.me/sprites/pokemon/1.svg');
    expect(dreamWorld('https://mbilal.me/sprites/pokemon/2.jpg')).toBe('https://mbilal.me/sprites/pokemon/2.jpg');
    expect(dreamWorld('')).toBe('');
  });
});

describe('generateAbbreviation function', () => {
  it('should generate an abbreviation from a word', () => {
    expect(generateAbbreviation('internationalization')).toBe('IN');
    expect(generateAbbreviation('JavaScript')).toBe('JA');
    expect(generateAbbreviation('react-redux-toolkit')).toBe('RRT');
  });

  it('should generate a fallback abbreviation if the word is too short', () => {
    expect(generateAbbreviation('a')).toBe('A');
    expect(generateAbbreviation('ab')).toBe('AB');
  });
});
