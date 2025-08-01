// 三項演算子を使って、input が truthy ならその値を、
// falsy（null, undefined, 空文字など）なら "名無し" を name に代入
const name = input ? input : "名無し";

// オブジェクト user を作成。プロパティ name は変数名と同じなので省略記法が使える
const user = {
    name,      // これは name: name の省略形
    age: 20,   // age プロパティにリテラル値 20 を設定
};