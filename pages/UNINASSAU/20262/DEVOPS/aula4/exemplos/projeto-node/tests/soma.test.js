import test from 'node:test';
import assert from 'node:assert/strict';
import { soma } from '../src/soma.js';
test('soma dois números', () => {
  assert.equal(soma(2, 3), 5);
});
test('soma com zero', () => {
  assert.equal(soma(7, 0), 7);
});
