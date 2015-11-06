var chai = require('chai');
var expect = chai.expect;
var methods = require(__dirname + '/../prototype_methods.js');

describe('the push methods', function(){

  it('should append an item to the end of the array and return the length of the array', function() {
    expect(methods.timPush(['test1', 'test2'], 'test3', 'test4')).to.eql(4);
  });
});

describe('the pop methods', function(){

  it('should delete the last index of an array and return it', function() {
    expect(methods.timPop(['test1', 'test2', 'test3'])).to.eql('test3');
  });
});


describe('the shift method', function(){

  it('should remove the first index of an array and return it', function() {
    expect(methods.timShift(['test1', 'test2', 'test3'])).to.eql('test1');
  });
});


describe('the unshift method', function(){

  it('should append an item to the beginning of the array and return the length of the new array', function() {
    expect(methods.timUnshift(['test3'], 'test1', 'test2')).to.eql(3);
  });
});

describe('the unique method', function() {

  it('should take in an array and return a new array with all duplicate value removed', function() {
    expect(methods.timUnique(['test1', 'test2', 'test1'])).to.eql(['test1', 'test2']);
  });
});

describe('the frequency method', function() {

  it('should take in an array and return the most common letter in the array', function() {
    expect(methods.timFrequency(['test1', 'test2', 'test3'])).to.eql('t 6 times');
  });
});

