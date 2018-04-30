import { expect } from 'chai';
import squareAllNumbers from '../app/app';
import { describe } from 'mocha';

describe('Test for squaring all numbers', () => {
  it('must accept only an interger', (done) => {
    expect(squareAllNumbers().equal('method parameter must be an integer'));
  })

  it('must accept only an interger', (done) => {
    expect(squareAllNumbers('9119').equal('method parameter must be an integer'));
  })

  it('must accept only an interger', (done) => {
    expect(squareAllNumbers(9119.99).equal('method parameter must be an integer'));
  })

  it('must accept only an interger', (done) => {
    expect(squareAllNumbers([9119]).equal('method parameter must be an integer'));
  })

  it('it should return 811181', (done) => {
    expect(squareAllNumbers(9119).equal(811181));
  })

  it('it should return 25258136', (done) => {
    expect(squareAllNumbers(5596).equal(25258136));
  })

})