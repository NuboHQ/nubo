'use strict';

const graphql = require('..');
const assert = require('assert').strict;

assert.strictEqual(graphql(), 'Hello from graphql');
console.info("graphql tests passed");
