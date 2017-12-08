# [WiP] doc-tag

**Warning**: this is a proof-of-concept implementation.

Describe you code(functions, components, objects, etc) and get docs in runtime debugging.

## Usage

Import the lib:

```js
import described, {doc} from 'doc-tag';
// or just doc, it's same export
import doc from 'doc-tag';
```

Describe your code:

```js
// function
const add = described
  `this func adds x to y`
  ((x, y) => x + y);

// react component
// ...
export default described
  `My awesome component description`
  (MyComponent);

// mobx store
// ...
export default described
  `User store:
    - currentUser
    - isLoading`
  (new UserStore());
```

Take docs in runtime

```js
// 
doc(add);
// => this func adds x to y

doc(this.props.userStore) 
// => User store:
//    - currentUser
//    - isLoading

doc(MyComponent)
// => My awesome component description
```

You can use keys in description:

```js
const user = doc
  `This is User object with id ${'id'}`
  (api.get('user', 1));

doc(user);
 // => 'This is User object with id 1'
```
