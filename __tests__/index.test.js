import str from '../src/index.js';

test('testReverseStr', () => {
  expect(str('hello')).toEqual('olleh');
  expect(str('')).toEqual('');
});