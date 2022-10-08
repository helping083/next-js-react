'use strict';

const aws = require('..');
const assert = require('assert').strict;

assert.strictEqual(aws(), 'Hello from aws');
console.info("aws tests passed");
