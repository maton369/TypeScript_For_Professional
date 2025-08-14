// 引数 type は文字列リテラル型 "plus" または "minus" のみを受け付ける
// それ以外の文字列は型レベルで弾かれるので安全である
function signNumber(type: "plus" | "minus") {
    // 条件演算子で返り値を分岐する
    // "plus" のとき 1、そうでなければ（"minus"） -1 を返す
    return type === "plus" ? 1 : -1;
}

console.log(signNumber("plus"));  // 1 と表示される（"plus" に対応する符号である）
console.log(signNumber("minus")); // -1 と表示される（"minus" に対応する符号である)

// ❌ エラー例: "uhyo" は許可されたリテラル型に含まれないためコンパイルエラーとなる
// エラー: Argument of type '"uhyo"' is not assignable to parameter of type '"plus" | "minus"'.
console.log(signNumber("uhyo"));