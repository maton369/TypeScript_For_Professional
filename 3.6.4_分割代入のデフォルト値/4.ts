type Obj = { foo?: number };
const obj1: Obj = {};

// 分割代入で foo にデフォルト値 500 を設定している。
// foo プロパティが undefined の場合のみ、このデフォルト値が使用される。
// この場合 obj1 に foo が存在しないため undefined となり、結果 foo には 500 が代入される。
// foo の型は number 型になる（デフォルト値 500 も number のため）。
const { foo = 500 } = obj1;