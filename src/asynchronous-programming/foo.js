export const foo = (x, cb) => {
  if (x > 10) {
    console.log(`${x} > 10`);
    cb();
  } else {
    console.log(`${x} <= 10`);
  }
};
export const createCb = (str) => () => {
  console.log(str);
};
// console.log(foo(5, createCb('cb')));
