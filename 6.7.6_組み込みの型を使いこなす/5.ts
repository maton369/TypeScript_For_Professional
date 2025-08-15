type Union = "uhyo" | "hyo" | 1 | 2 | 3;

// Exclude<T, U> は、型 T のうち、型 U に代入可能な部分を除外するユーティリティ型である。
// ここでは T = Union, U = string なので、Union の中で string 型に代入可能な部分を取り除く。
type T = Exclude<Union, string>;

// 結果として T は 1 | 2 | 3 となるである。