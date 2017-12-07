import doc from '../src';
import fun from './lib';

const add = doc`this func adds x to y`((x, y) => x + y);

console.log(doc(fun));
console.log(doc(add));
