'use strict';
module.exports = {
    container: {},

    add: function(key, data) {
        this.container[key] = data;
    },

    get: function(key) {
        if (this.container[key] === undefined) {
            return null;
        }

        return this.container[key];
    }
};
