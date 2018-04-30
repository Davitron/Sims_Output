import chai from 'chai';
import squareAllNumbers from '../app/app';
import { describe } from 'mocha';

chai.should();


describe('Test for squaring all numbers', () => {
  it('must accept only an interger', (done) => {
    const output = squareAllNumbers();
    output.should.eql('method parameter must be an integer');
    done();
  })

  it('must accept only an interger', (done) => {
    const output = squareAllNumbers('9119');
    console.log(output, 'new output')
    output.should.eql('method parameter must be an integer');
    done();
  })

  it('must accept only an interger', (done) => {
    const output = squareAllNumbers(9119.99);
    output.should.eql('method parameter must be an integer');
    done();
  })

  it('must accept only an interger', (done) => {
    const output = squareAllNumbers([9119]);
    output.should.eql('method parameter must be an integer');
    done();
  })

  it('it should return 811181', (done) => {
    const output = squareAllNumbers(9119);
    output.should.eql(811181);
    done();
  })

  it('it should return 25258136', (done) => {
    const output = squareAllNumbers(5596);
    output.should.eql(25258136);
    done();
  })

})