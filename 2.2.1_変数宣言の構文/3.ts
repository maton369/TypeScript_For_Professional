// 複数の定数を1つの `const` 宣言でカンマ区切りにより定義している。
// これは文法上有効な書き方であり、すべての変数が `const`（再代入不可）となる。

// `greeting` には "Hello, " という文字列リテラルを代入している。
// 型注釈はないが、TypeScript により `string` 型として推論される。
const greeting = "Hello, ",

    // `target` には "world!" を代入。こちらも `string` 型に推論される。
    target = "world!",

    // `greeting + target` の文字列連結により "Hello, world!" が生成され、
    // それが `text` に代入される。`text` も `string` 型である。
    text = greeting + target;

// `text` の内容（"Hello, world!"）を標準出力に表示する。
console.log(text);