type Fruit = "apple" | "orange" | "strawberry";
// ↑ リテラル型のユニオン。"apple" | "orange" | "strawberry" のいずれかになる型

// ▼ Mapped Types（マップド型）の例
// [P in Fruit]: number は、Fruit の各要素 P に対して number 型のプロパティを持つオブジェクト型を作る
//
// 結果:
// type FruitNumbers = {
//   apple: number;
//   orange: number;
//   strawberry: number;
// };
type FruitNumbers = {
    [P in Fruit]: number
};

// ▼ 正しい代入例
const numbers: FruitNumbers = {
    apple: 3,
    orange: 10,
    strawberry: 20
};

// --- 解説 ---
// - Mapped Types は、ユニオン型の各要素をキーとして展開できる。
// - 今回は Fruit の3つの文字列リテラルをプロパティ名にして、それぞれ number 型を割り当てている。
// - この方法により、Fruit 型に新しい値を追加した場合も、FruitNumbers で自動的にプロパティが追加されるため、型の一貫性が保たれる。