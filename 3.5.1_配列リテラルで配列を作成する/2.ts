// 配列 arr2 を定義
// 要素は 100（number型）、"文字列"（string型）、false（boolean型）
// JavaScript では配列の要素型が混在しても問題ない
const arr2 = [100, "文字列", false];

// この場合、TypeScript で型推論を行うと
// (string | number | boolean)[] 型として扱われる