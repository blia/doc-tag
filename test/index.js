import doc from '../src';

const api = {
  get() {
    return new Promise(res =>
      setTimeout(_ => res({ id: 1, name: 'Moz' }), 1000)
    );
  }
};

const add = doc
  `this func adds x to y`
  ((x, y) => x + y);

console.log(doc(add));

const foo = doc
  `Hey, this is function ${'name'}`
  (function bar() {
    return 'noop';
  });

console.log(doc(foo));

const user = doc
  `This is User object with id ${'id'}`
  (api.get('user', 1));

console.log(doc(user));
