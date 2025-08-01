// `greeting` は "Hello, " を代入された変数である。
// 型注釈は省略されているが、TypeScript により `string` 型と推論される。
// `let` により定義されているため、後から再代入が可能である。
let greeting = "Hello, ";

// `target` は "world!" を代入された変数であり、こちらも `string` 型と推論される。
// 同様に `let` によって定義されているため、後で別の文字列を代入することも可能。
let target = "world!";

// `greeting` と `target` を `+` 演算子で結合して、
// 結果として得られる "Hello, world!" をコンソールに出力する。
console.log(greeting + target);