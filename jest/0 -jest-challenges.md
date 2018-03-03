# Jest Challenges

## Matchers
Create one module and one test file for each challenge.
The module should export a function to be used in the test
Create the test file first

https://facebook.github.io/jest/docs/en/using-matchers.html

**Use ```toBe()``` to test exact values**

~~1 - Subtraction~~

~~2 - Hello <name>~~

**Use ```toEqual()``` to check the value of an object**

~~3 - {first:<first>, second: <second>}~~

**Use ```not``` to test for the opposite of a matcher**

~~4 - return a number not equal to the number passed~~

**Testing for Truthiness**

~~5 - returns null for 0, "lucky" for 1-9, undefined for 10-19~~

Use all the following matchers:
* toBeNull matches only null
* toBeUndefined matches only undefined
* toBeDefined is the opposite of toBeUndefined
* toBeTruthy matches anything that an if statement treats as true
* toBeFalsy matches anything that an if statement treats as false

**Numbers**

~~6 - returns a number between 12 and 20~~
~~7 - floating point addition~~

**Strings**

8 - remove vowels (.not)
9 - adds 'bananas' to any string passed.

**arrays**

10 - return an array of words in a sentence

**errors**

11 - throw and error if an argument is a string, not a number
