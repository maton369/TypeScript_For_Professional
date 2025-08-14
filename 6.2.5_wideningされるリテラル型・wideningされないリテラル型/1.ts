// これは widening されるパターン
// "uhyo" という値から推論される型は string になる
const uhyo1 = "uhyo";

// これは widening されないパターン
// 明示的に "uhyo" 型と注釈しているためリテラル型のまま
const uhyo2: "uhyo" = "uhyo";

// ここでは uhyo1 は string 型なので uhyo3 も string 型になる
let uhyo3 = uhyo1;

// ここでは uhyo2 は "uhyo" 型なので uhyo4 も "uhyo" 型になる
let uhyo4 = uhyo2;