// 関数型Fを定義（引数repeatNumを受け取り、stringを返す関数型）
type F = (repeatNum: number) => string;

// F型を使ってxRepeat関数を定義
// num回だけ "x" を繰り返した文字列を返す
const xRepeat: F = (num: number): string => "x".repeat(num);

// 使用例
console.log(xRepeat(3)); // "xxx"
console.log(xRepeat(0)); // ""（空文字列）