const { expect } = require('chai');
const { describe, it, beforeEach, afterEach } = require('mocha');
const NumbersValidator = require('../../app/numbers_validator');

describe('isNumberEven', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('positive tests', () => {
    it('should return true when provided an even number', () => {
      const validationResults = validator.isNumberEven(4);
      expect(validationResults).to.be.equal(true);
    });
  });

  describe('negative tests', () => {
    it('should return false when provided a non even number', () => {
      const validationResults = validator.isNumberEven(5);
      expect(validationResults).to.be.equal(false);
    });
    it('should throw an error when provided not a number value', () => {
      const input = 'four';

      expect(() => validator.isNumberEven(input)).to.throw(`[${input}] is not of type "Number" it is of type "string"`);
    });
  });
});
