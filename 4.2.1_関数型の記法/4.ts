// 関数型Fを定義
// repeatNum: number を引数に取り、string を返す関数の型
type F = (repeatNum: number) => string;

// xRepeatはF型を持つ関数
// 引数numの回数だけ "x" を繰り返した文字列を返す
const xRepeat: F = (num: number): string => "x".repeat(num);

// 実行例
console.log(xRepeat(5));  // "xxxxx"
console.log(xRepeat(1));  // "x"
console.log(xRepeat(0));  // ""