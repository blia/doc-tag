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

```js
// You can use keys in description
const user = doc
  `This is User object with id ${'id'}`
  (api.get('user', 1));

doc(user); // => 'This is User object with id 1'
```
