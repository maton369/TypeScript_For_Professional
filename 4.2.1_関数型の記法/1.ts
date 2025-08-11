// 引数 num の回数だけ "x" を繰り返した文字列を返す関数
// 例: num が 5 の場合、"xxxxx" を返す
const xRepeat = (num: number): string => "x".repeat(num);

// 使用例
console.log(xRepeat(1));  // "x"
console.log(xRepeat(5));  // "xxxxx"
console.log(xRepeat(0));  // ""（空文字列）