// `greeting` は文字列型（string）の定数として宣言される。
// 値は "Hello, " であり、型注釈 `: string` により明示的に文字列型であることを指定している。
const greeting: string = "Hello, ";

// `target` も文字列型の定数であり、"world!" という値が代入されている。
// こちらも明示的に `string` 型が指定されている。
const target: string = "world!";

// `greeting` と `target` を `+` 演算子で結合し、
// 結果である "Hello, world!" を標準出力（コンソール）に表示する。
console.log(greeting + target);