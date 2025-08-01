// `repeatHello` 関数を定義する。
// 引数 `count` は `number` 型であり、
// 文字列 "hello" を何回繰り返すかを指定する。
// 戻り値の型は `string` で、"hello" を `count` 回繰り返した文字列を返す。
function repeatHello(count: number): string {
    return "hello".repeat(count);
}

// ↓ここで型エラーが発生する。
// `repeatHello` 関数は `number` 型の引数を必要とするが、
// 実際には `"wow"` という `string` 型の値を渡しているため、
// TypeScript の静的型チェックによりコンパイル時にエラーとなる。
console.log(repeatHello("wow"));
// エラーメッセージ例：
// Argument of type 'string' is not assignable to parameter of type 'number'.