// `greeting` という変数を宣言し、初期値として "Hello, " を代入する。
// 型注釈は省略されているが、TypeScript により `string` 型と推論される。
// `let` を使っているため、後から値の再代入が可能である。
let greeting = "Hello, ";

// `greeting` に "world!" を文字列結合して再代入する。
// これにより `greeting` の値は "Hello, world!" になる。
greeting = greeting + "world!";

// 現在の `greeting` の内容をコンソールに出力する。
// 出力結果は "Hello, world!"。
console.log(greeting);