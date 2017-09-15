var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can do additions', function() {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('can do subtractions', function() {
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(3);
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 4);
  })

  it('can do multiplications', function() {
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 15);
  })

  it('can do division', function() {
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('can concatenate number clicks', function() {
    calculator.numberClick(2);
    calculator.numberClick(5);
    assert.strictEqual(calculator.runningTotal, 25);
  })

  it('can update runningTotal when numberClick', function() {
    calculator.numberClick(5);
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('can concatenate number clicks', function() {
    calculator.numberClick(2);
    calculator.numberClick(5);
    assert.strictEqual(calculator.runningTotal, 25);
  })

  it('can save operator button click to previousOperator', function() {
    calculator.operatorClick('+');
    assert.equal(calculator.previousOperator, '+');
  })

  it('can change operator for each calculation', function() {
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('+')
    calculator.numberClick(2);
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('can clr runningTotal but not previousTotal', function() {
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('+')
    calculator.numberClick(2);
    calculator.clearClick();
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 6);
  })

});
