// 変数 str は any 型で、文字列 "3" が代入されている
const str: any = "3";

// 抽象的等価演算子（==）は型を自動変換してから比較する
// "3" は数値 3 に型変換され、値が等しいため true になる
console.log(str == 3); // true が表示される

// 厳密等価演算子（===）は型と値の両方を比較する
// "3" は string 型、3 は number 型のため false になる
console.log(str === 3); // false が表示される