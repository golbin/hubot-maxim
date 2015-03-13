var nodeunit = require('nodeunit');

var path = require('path'),
    maxim = require(path.resolve('libs', 'maxim'));

exports['maxim library'] = nodeunit.testCase({
  'Random maxim': function (test) {
    test.equal(typeof maxim.random().author, 'string');
    test.done();
  },
  'Select maxim': function (test) {
    test.equal(typeof maxim.select(0).message, 'string');
    test.done();
  },
  'Menu is not exists': function (test) {
    test.equal(maxim.select(-1), null);
    test.done();
  },
});
