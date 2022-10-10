const {parentPort, workerData} = require("worker_threads");
const factorial = require('./factorial');

parentPort.postMessage(factorial(workerData.targetFact, workerData.options));