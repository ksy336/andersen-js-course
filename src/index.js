import './styles/main.css';
import { createCb, foo } from './asynchronous-programming/foo';

console.log(foo(5, createCb('cb')));
console.log(foo(12, createCb('cb')));