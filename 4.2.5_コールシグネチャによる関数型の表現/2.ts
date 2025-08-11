// F型は「引数にstringを取り、戻り値がnumberの関数型」を定義
type F = (arg: string) => number;

// G型も同じく「引数にstringを取り、戻り値がnumberの関数型」を定義
// こちらはオブジェクト型の中に呼び出しシグネチャ（コールシグネチャ）を記述している
type G = { (arg: string): number; };

// どちらの型も次のような関数に適用可能
const funcF: F = (s) => s.length;   // 文字列の長さを返す
const funcG: G = (s) => s.length;   // 文字列の長さを返す

console.log(funcF("Hello")); // 5 と表示される
console.log(funcG("world")); // 5 と表示される