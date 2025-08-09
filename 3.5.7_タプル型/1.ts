// タプル型 [string, number] を定義し、変数 tuple に代入
let tuple: [string, number] = ["foo", 0];

// 同じ型構造 [string, number] の値を再代入（OK）
tuple = ["aiueo", -555];

// tuple[0] は string 型
const str = tuple[0]; // strはstring型

// tuple[1] は number 型
const num = tuple[1]; // numはnumber型

// tuple[2] は存在しないためコンパイルエラー
// エラー: Tuple type '[string, number]' of length '2' has no element at index '2'.
const nothing = tuple[2];