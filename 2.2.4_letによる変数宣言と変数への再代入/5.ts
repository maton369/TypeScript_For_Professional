// `greeting` と `target` の2つの変数を同時に宣言している。
// それぞれに `string` 型の型注釈が明示されており、文字列以外の値を代入しようとすると型エラーになる。
let greeting: string, target: string;

// `greeting` に "Hello, " を代入する。
// `string` 型であるため、文字列の代入は型に適合する。
greeting = "Hello, ";

// `target` に "world!" を代入する。
// こちらも `string` 型に適合する文字列リテラルである。
target = "world!";

// `greeting + target` によって文字列の結合が行われ、
// 結果として "Hello, world!" が生成され、コンソールに出力される。
console.log(greeting + target);