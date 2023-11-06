/* eslint-disable no-undef */
const ClientError = require('../ClientError');

describe('ClientError', () => {
  it('should throw an error when directly used it', () => {
    expect(() => new ClientError('')).toThrowError('cannot instantiate abstract class');
  });
});
