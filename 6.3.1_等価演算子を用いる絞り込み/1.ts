// 2値の符号を表すユニオン型である
type SignType = "plus" | "minus";

// 引数 type が "plus" なら 1、"minus" なら -1 を返す関数である
function signNumber(type: SignType) {
    return type === "plus" ? 1 : -1;
}

// 数値に符号指定を適用して返す関数である
// 第2引数 type は "plus" | "minus" に加えて "none" も受け付ける
function numberWithSign(num: number, type: SignType | "none") {
    if (type === "none") {
        // ここでは type は "none" 型に絞り込まれている（型ナローイングが行われている）である
        return 0; // 符号適用なしを 0 で表現して返すである
    } else {
        // ここでは type は SignType 型（"plus" | "minus"）に絞り込まれているである
        // signNumber は SignType を受け取り 1 か -1 を返すため、num に掛け算すれば符号付けできるである
        return num * signNumber(type);
    }
}

// 動作例である
console.log(numberWithSign(5, "plus"));  // 5 と表示されるである
console.log(numberWithSign(5, "minus")); // -5 と表示されるである
console.log(numberWithSign(5, "none"));  // 0 と表示されるである