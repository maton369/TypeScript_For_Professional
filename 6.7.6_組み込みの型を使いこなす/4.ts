type Union = "uhyo" | "hyo" | 1 | 2 | 3;

// Extract<T, U> は、型 T のうち、型 U に代入可能な部分だけを抽出するユーティリティ型である。
// ここでは T = Union, U = string なので、Union の中で string 型に代入可能な部分だけを取り出す。
type T = Extract<Union, string>;

// 結果として T は "uhyo" | "hyo" となるである。