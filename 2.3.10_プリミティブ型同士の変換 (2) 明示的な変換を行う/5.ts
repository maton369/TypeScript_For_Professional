// 数値から文字列へ変換する例
// Number 型の 1234.5 を String() 関数で文字列 "1234.5" に変換している
const str1 = String(1234.5); // "1234.5" という文字列になる
console.log(str1); // "1234.5" と表示される

// 真偽値（boolean）から文字列への変換
// true は "true" という文字列に変換される（false なら "false" になる）
const str2 = String(true); // "true" という文字列になる
console.log(str2); // "true" と表示される

// null や undefined も文字列に変換可能である
// null → "null"、undefined → "undefined" という文字列になる
const str3 = String(null); // "null" という文字列になる
const str4 = String(undefined); // "undefined" という文字列になる

// 複数の値を出力。スペース区切りで "null undefined" と表示される
console.log(str3, str4); // "null undefined" と表示される