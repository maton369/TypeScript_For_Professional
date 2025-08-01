// `str1` は文字列リテラル "Hello" を格納する定数であり、型注釈により `string` 型と明示されている。
const str1: string = "Hello";

// `str2` も同様に "world!" を格納する `string` 型の定数である。
const str2: string = "world!";

// テンプレートリテラル（バッククォート `` ` `` を用いる）内で `${str1}` および `${str2}` を展開している。
// `${...}` の構文により、変数の値が文字列中に埋め込まれる。
// 結果として、"Hello, world!" が生成される。
console.log(`${str1}, ${str2}`); // 出力: Hello, world!