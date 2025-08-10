// 空オブジェクト型 {} は、null と undefined 以外のすべての値を代入できる型である
// これらはOK
let val: {} = 123;           // number 型も OK
val = "foobar";              // string 型も OK
val = { num: 1234 };         // オブジェクト型も OK

// これはコンパイルエラー
// エラー: Type 'null' is not assignable to type '{}'.
val = null;

// これもコンパイルエラー
// エラー: Type 'undefined' is not assignable to type '{}'.
val = undefined;