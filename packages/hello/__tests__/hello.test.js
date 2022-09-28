'use strict';

const hello = require('..');
const assert = require('assert').strict;

assert.strictEqual(hello(), 'Hello from hello');
console.info("hello tests passed");
