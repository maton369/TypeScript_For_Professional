// `greeting` と `target` の2つの変数を同時に `let` で宣言する。
// この時点では、どちらの変数も値は未定義（undefined）であり、型もまだ確定していない。
let greeting, target;

// `greeting` に "Hello, " という文字列を代入する。
// これにより、`greeting` の型は `string` に推論される。
greeting = "Hello, ";

// `target` に "world!" を代入することで、こちらも `string` 型に推論される。
target = "world!";

// `greeting` + `target` によって文字列の連結が行われ、"Hello, world!" という文字列が生成される。
// `console.log` によってそれが標準出力に表示される。
console.log(greeting + target);