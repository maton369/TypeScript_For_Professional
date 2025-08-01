// `greeting` は "Hello, " という文字列リテラルを保持する定数である。
// 型注釈は省略されているが、TypeScript により自動的に `string` 型として推論される。
const greeting = "Hello, ";

// `target` は "world!" という文字列リテラルを保持する定数である。
// 同様に、型は自動的に `string` 型として推論される。
const target = "world!";

// `greeting` と `target` を `+` 演算子で結合し、
// 結果の文字列 "Hello, world!" を標準出力に表示する。
console.log(greeting + target);