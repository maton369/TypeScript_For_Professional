// 条件演算子を使って、input が空でなければその値を name に、
// 空または falsy な値であれば "名無し" を name に設定する
const name = input ? input : "名無し";

// user オブジェクトを定義し、name と age プロパティを持たせる
const user = {
    name: name, // 先ほど決定した name を代入
    age: 20     // 年齢を 20 として設定
};