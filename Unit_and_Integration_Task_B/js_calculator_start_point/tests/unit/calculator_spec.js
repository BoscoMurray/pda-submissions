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

});
