// Human 型の定義
type Human = {
    name: string; // 名前
    age: number;  // 年齢
};

// keyof Human は "name" | "age" という文字列リテラル型のユニオンになる
type HumanKeys = keyof Human;

// HumanKeys 型の変数 key は "name" または "age" のみ代入可能
let key: HumanKeys = "name"; // OK（"name"はHumanKeys型の一部）
key = "age";                 // OK（"age"もHumanKeys型の一部）

// エラー: "hoge" は "name" | "age" に含まれないため代入不可
key = "hoge";