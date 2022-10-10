// jshint esversion: 11
'use strict'

const path = require('path');
const factorial = require('./factorial');

const {
    Worker
} = require('node:worker_threads');

const factorialAsync = function (targetFact, options) {
    return new Promise((resolve, reject) => {
        const worker = new Worker(path.join(__dirname + '/threadWorker.js'), {
            workerData: {
                targetFact,
                options
            }
        });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`));
        });
    });
};

function timestamp() {
    const date = new Date();
    return date.getTime();
}

function fbench(num, options) {
    const timeBegin = timestamp();
    const result = factorial(num, options);
    const timeEnd = timestamp();
    return {
        time: timeEnd - timeBegin,
        result
    };
}

async function fbenchAsync(num, options) {
    const timeBegin = timestamp();
    const result = await factorialAsync(num, options);
    const timeEnd = timestamp();
    return {
        time: timeEnd - timeBegin,
        result
    };
}

module.exports = factorial;
module.exports.async = factorialAsync;
module.exports.array = (targetFact, options) => factorial(targetFact, {
    ...options,
    array: true
});
module.exports.benchmark = fbench;
module.exports.benchmarkAsync = fbenchAsync;