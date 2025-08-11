// 数値 arg の回数だけ "x" を繰り返した文字列を返すアロー関数
// 返り値の型を string と明示している
const xRepeat = (arg: number): string => "x".repeat(arg);

// 使用例
console.log(xRepeat(5)); // "xxxxx" と表示される
console.log(xRepeat(0)); // ""（空文字）と表示される