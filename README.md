# factorial-js
Calculate the factorial of a really huge number. The result is returned in a string form or number array.

## Getting Started

### Installation

```
$ npm install factorial-js
```

### Usage examples

```js
const factorial = require('factorial-js');

// Synchronous function returns calculation results as a string. It will block the event loop.
let result = factorial(12);
console.log(result); // String: 479001600

// Synchronous function that returns an array of numbers. It will block the event loop.
result = factorial(12, { array:true });
console.log(result); // Array: [ 0, 0, 6, 1, 0, 0, 9, 7, 4 ]

// Synchronous function returns an object containing keys 'time' in milliseconds and 'result' as a string.
result = factorial.benchmark(200);
console.log(result); 
// Result:
// {
//     time: 9,
//     result: '788657867364790503552363213932185062295135977687173263294742533244359449963403342920304284011984623904177212138919638830257642790242637105061926624952829931113462857270763317237396988943922445621451664240254033291864131227428294853277524242407573903240321257405579568660226031904170324062351700858796178922222789623703897374720000000000000000000000000000000000000000000000000'
// }

// Synchronous function returns an object containing keys 'time' in milliseconds and 'result' as a numbers array.
result = factorial.benchmark(12, { array:true });
console.log(result); 
// Result:
// {
//     time: 5,
//     result: [
//       0, 0, 6, 1, 0,
//       0, 9, 7, 4
//     ]
//   }

// Asynchronous function returns calculation results as a string. It is using worker_threads, so it won't block the event loop as all calculations are performed in a separate thread.
factorial.async(12)
.then((res) => {
    console.log(res); // String: 479001600
});

// Asynchronous function that returns an array of numbers. It is using worker_threads, so it won't block the event loop as all calculations are performed in a separate thread.
factorial.async(12, { array:true })
.then((res) => {
    console.log(res); // Array: [ 0, 0, 6, 1, 0, 0, 9, 7, 4 ]
});

// Asynchronous version of 'factorial.benchmark' function. It is using worker_threads, so it won't block the event loop as all calculations are performed in a separate thread.
factorial.benchmarkAsync(1200, { array:true })
.then((res) => {
    console.log(res);
});
// Result object:
// {
//     time: 130,
//     result: [
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0,
//       ... 3076 more items
//     ]
//   }

```

## Credits

factorial-js created by Andrjus Valkuns