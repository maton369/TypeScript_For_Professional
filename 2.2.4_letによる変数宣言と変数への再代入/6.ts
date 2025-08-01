// `greeting` および `target` の2つの変数を宣言する。
// どちらも `string` 型であることを明示しているが、まだ初期値は代入されていない。
let greeting: string, target: string;

// `greeting` に "Hello, " を代入する。
// これは `string` 型なので型注釈に適合しており、問題ない。
greeting = "Hello, ";

// ❌ `target` は未初期化のままであるため、この時点では `undefined` になっている。
// `greeting + target` は `"Hello, " + undefined` となり、結果は "Hello, undefined" となる。
// これは構文エラーではないが、**論理的な誤りや意図しない出力の原因になりうる**。
console.log(greeting + target);  // 出力: Hello, undefined