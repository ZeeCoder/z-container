var container = require('../container');
var DataSaver = require('./fixtures/DataSaver');
var assert = require('assert');
var clone = require('clone');

describe('container.js', function () {
    beforeEach(function() {
        this.container = clone(container);
    });

    describe('#add and #get', function () {
        it('should save an object reference', function() {
            var data_saver = new DataSaver('data!');
            this.container.add('data_saver', data_saver);

            assert.equal('data!', this.container.get('data_saver').getData());
        });

        it('should save a string', function() {
            this.container.add('string', 'save this');

            assert.equal('save this', this.container.get('string'));
        });
    });

    describe('#get', function () {
        it('should return with "null" if key doesn\'t exists', function() {
            assert.equal(null, this.container.get('non_existent_key'));
        });
    });
});
