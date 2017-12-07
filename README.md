# doc-tag

## Usage

```js
// define some with doc
const add = doc
  `this func adds x to y`
  ((x, y) => x + y);
```

```js
// take docs in runtime
doc(add); // => 'this func adds x to y'
```
