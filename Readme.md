# array-compact

Return an array copy without falsy values.


### Installation

```
$ npm install array-compact --save
```


### Usage

```javascript
const compact = require('array-compact');

let arr = ['', 0, 1, 'abc', false, true];

compact(arr); // => [1, 'abc', true]
```


### Tests

```
$ make test
```


### License

array-compact is released under the MIT license.
