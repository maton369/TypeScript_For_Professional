// `str1` はダブルクォート（"）で囲まれた文字列 "Hello" を格納する定数。
// 型注釈 `: string` により、文字列型であることを明示している。
const str1: string = "Hello";

// `str2` はシングルクォート（'）で囲まれた文字列 'world!' を格納する定数。
// TypeScript ではシングルクォートもダブルクォートも文字列リテラルとして等価である。
const str2: string = 'world!';

// `str1 + ", " + str2` によって文字列同士を連結している。
// `"Hello"` + `", "` + `"world!"` の順に結合され、
// 結果は "Hello, world!" となる。
console.log(str1 + ", " + str2); // 出力: Hello, world!