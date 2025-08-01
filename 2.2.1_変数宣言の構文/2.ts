// `greeting` は "Hello, " という文字列リテラルを保持する定数。
// 型注釈は省略されているが、TypeScript により `string` 型として推論される。
const greeting = "Hello, ";

// `target` は "world!" という文字列リテラルを保持する定数。
// 同様に `string` 型として推論される。
const target = "world!";

// `greeting` と `target` を `+` 演算子で結合し、
// その結果である "Hello, world!" を `text` に代入する。
// `text` の型も `string` として推論される。
const text = greeting + target;

// `text` をコンソールに出力する。
// 出力結果は: Hello, world!
console.log(text);