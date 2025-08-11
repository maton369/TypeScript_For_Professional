// xRepeat関数を定義
// 引数 num: number を受け取り、その数だけ "x" を繰り返した文字列を返す
const xRepeat = (num: number) => "x".repeat(num);

// 実行例
console.log(xRepeat(5));  // "xxxxx" が表示される
console.log(xRepeat(1));  // "x" が表示される
console.log(xRepeat(0));  // ""（空文字列）が表示される