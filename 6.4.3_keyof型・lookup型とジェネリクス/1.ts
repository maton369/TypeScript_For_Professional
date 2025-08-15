// ジェネリック関数 get を定義
// T: オブジェクトの型
// K: オブジェクト T のキー（keyof T に制約）
function get<T, K extends keyof T>(obj: T, key: K): T[K] {
    // obj の key プロパティ値を返す
    return obj[key];
}

// Human 型を定義
type Human = {
    name: string; // 名前
    age: number;  // 年齢
}

// Human 型の変数 uhyo を定義
const uhyo: Human = {
    name: "uhyo",
    age: 26
};

// "name" プロパティを取得 → string 型
const uhyoName = get(uhyo, "name"); // 型: string
// "age" プロパティを取得 → number 型
const uhyoAge = get(uhyo, "age");   // 型: number