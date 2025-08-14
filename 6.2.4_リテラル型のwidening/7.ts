// Uhyo型の定義
// name プロパティは "uhyo" という文字列リテラル型固定
// age プロパティは任意の数値を受け入れる
type Uhyo = {
    name: "uhyo";
    age: number;
};

// Uhyo型のオブジェクトを作成
// name は "uhyo" 以外を指定するとコンパイルエラーになる
const uhyo: Uhyo = {
    name: "uhyo", // ✅ 許可される
    age: 26       // ✅ 任意の数値が許可される
};

// エラー例:
// name に "john" を指定するとエラー
/*
const wrongUhyo: Uhyo = {
  name: "john", // ❌ エラー: Type '"john"' is not assignable to type '"uhyo"'.
  age: 26
};
*/