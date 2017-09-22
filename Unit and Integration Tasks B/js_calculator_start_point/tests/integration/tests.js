var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    var running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  })

  it('should have working arithmetic buttons including plus', function(){
    var running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    add = element(by.css('#operator_add'));
    add.click();
    element(by.css('#number3')).click();
    add.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5');
  })

  it('should have working arithmetic buttons including minus', function(){
    var running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    subtract = element(by.css('#operator_subtract'));
    subtract.click();
    element(by.css('#number2')).click();
    subtract.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1');
  })

  it('should have working arithmetic buttons including divide', function(){
    var running_total = element(by.css('#running_total'))
    element(by.css('#number8')).click();
    divide = element(by.css('#operator_divide'));
    divide.click();
    element(by.css('#number2')).click();
    divide.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4');
  })

  it('should have working arithmetic buttons including multiply', function(){
    var running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    multiply = element(by.css('#operator_multiply'));
    multiply.click();
    element(by.css('#number3')).click();
    multiply.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('27');
  })

});