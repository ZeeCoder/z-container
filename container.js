'use strict';
module.exports = {
    container: {},

    add: function(key, data) {
        this.container[key] = data;
    },

    has: function(key) {
        return this.container[key] !== undefined;
    },

    get: function(key) {
        if (this.container[key] === undefined) {
            return null;
        }

        return this.container[key];
    }
};
