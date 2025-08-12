type UnaryFunc = (arg: number) => number; // 引数1つを受け取って数値を返す関数型
type BinaryFunc = (left: number, right: number) => number; // 引数2つを受け取って数値を返す関数型

// UnaryFuncの実装例: 引数を2倍にする
const double: UnaryFunc = arg => arg * 2;

// BinaryFuncの実装例: 2つの引数を加算する
const add: BinaryFunc = (left, right) => left + right;

// UnaryFuncをBinaryFuncに代入
// TypeScriptでは、引数の数が少ない関数は引数の多い関数型にも代入できる（パラメータは無視されるため）
// この場合、doubleは第1引数だけを使用し、第2引数は無視される
const bin: BinaryFunc = double;

// 呼び出し時、第2引数は無視され、第1引数だけを使って計算される
// double(10) → 20
console.log(bin(10, 100)); // 20 が表示される