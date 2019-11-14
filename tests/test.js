const assert = require('assert')
import Calculator from '../calculator.js' 

beforeEach(function () {
})

  let calc = new Calculator
  // return calc
describe("inputs", function() {
  it('will return correct initial result of 0', function () {
    let result = calc.result
    assert.equal(result, 0)
  })

  it('will set the operator variable if input is an operator', function() {
    let result = calc.newInput('+')
    assert.equal(result, '+')
  })

  it('will add aby number passed before an operator to the left if equation', function() {
    let result = calc.newInput('6')
    assert.equal(result, [6])
  })
})

describe("calculations", function() {
  describe('addition', function() {
    it('Gives correct result of addition sum', function() {
      let result = calc.validateResult(6, '+', 6)
      assert.equal(result, 12)
    })
    it('Correctly Adds 2 numbers with decimal points', function() {
      let result = calc.validateResult(23.5, '+', 17.5)
      assert.equal(result, 41)
    })
    it('Rounnd aswers with more that two decimal points', function() {
      let result = calc.validateResult(23.547, '+', 17.512)
      assert.equal(result, 41.06)
    })
  })
  describe('subtraction', function() {
    it('correctly subtracts two numbers', function() {
      let result = calc.validateResult(12, '-', 6)
      assert.equal(result, 6)
    })
  })
})

describe("Limitations", function() {
  it('Return an Err when result is larger than 9 digit number', function() {
    let result = calc.validateResult(999999999, '+', 1)
    assert.equal(result, 'Err')
  })
})


describe('functions', function() {
  it('displays the value of pi', function() {
    let result = calc.pi()
    assert.equal(result, 3.14159)
  })
  it('returns the square root of currently displayed number', function() {
    let result = calc.square(8)
    assert.equal(result, 2.82842712475)
  })
})