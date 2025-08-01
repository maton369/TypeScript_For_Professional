const num: number = 0;
// 型Tはnumの型、つまりnumber型になる
type T = typeof num;

// fooはT型、つまりnumber型の変数となる
const foo: T = 123;