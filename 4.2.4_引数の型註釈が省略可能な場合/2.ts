type F = (arg: number) => string;
// 関数型Fを定義。引数は数値型で、返り値は文字列型。

// 関数式の型注釈にFを使用しているため、
// 引数numの型は省略しても型推論によりnumber型になる。
const xRepeat: F = (num) => "x".repeat(num);

// 使用例
console.log(xRepeat(3)); // "xxx" と表示される
console.log(xRepeat(0)); // ""（空文字）と表示される