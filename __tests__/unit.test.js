// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

describe('isPhoneNumber', () => {
  test('should return true for a valid (123) 456-7890 format', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('should return true for a valid 123-456-7890 format', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });

  test('should return false for an invalid format with letters', () => {
    expect(isPhoneNumber('123-abc-4567')).toBe(false);
  });

  test('should return false for a number with too few digits', () => {
    expect(isPhoneNumber('123-456-789')).toBe(false);
  });
});

describe('isEmail', () => {
  test('should return true for a valid simple email address', () => {
    expect(isEmail('test@example.com')).toBe(true);
  });

  test('should return true for an email with underscores', () => {
    expect(isEmail('test_user@example.com')).toBe(true);
  });

  test('should return false for an email missing the @ symbol', () => {
    expect(isEmail('testexample.com')).toBe(false);
  });

  test('should return false for an email with invalid characters', () => {
    expect(isEmail('test!@example.com')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('should return true for a valid strong password starting with a letter', () => {
    expect(isStrongPassword('a1b2c3d')).toBe(true);
  });

  test('should return true for a valid strong password with max length', () => {
    expect(isStrongPassword('abcdefghijklmno')).toBe(true);
  });

  test('should return false for a password starting with a number', () => {
    expect(isStrongPassword('1abcd')).toBe(false);
  });

  test('should return false for a password with special characters', () => {
    expect(isStrongPassword('a!b@c#')).toBe(false);
  });
});

describe('isDate', () => {
  test('should return true for a valid date with single digits', () => {
    expect(isDate('1/1/2023')).toBe(true);
  });

  test('should return true for a valid date with double digits', () => {
    expect(isDate('12/30/2024')).toBe(true);
  });

  test('should return false for a date with incorrect separators', () => {
    expect(isDate('1-1-2023')).toBe(false);
  });

  test('should return false for a date with an invalid year format', () => {
    expect(isDate('1/1/23')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('should return true for a valid 3-character hex code', () => {
    expect(isHexColor('#ABC')).toBe(true);
  });

  test('should return true for a valid 6-character hex code without hash', () => {
    expect(isHexColor('123DEF')).toBe(true);
  });

  test('should return false for an invalid hex code with letters outside A-F', () => {
    expect(isHexColor('#GHI')).toBe(false);
  });

  test('should return false for a hex code with an incorrect length', () => {
    expect(isHexColor('#1234')).toBe(false);
  });
});