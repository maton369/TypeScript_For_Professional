type Fruit = "apple" | "orange" | "strawberry";
// ↑ "apple" | "orange" | "strawberry" の3つのリテラル型を持つユニオン型

// ▼ マップド型を利用して、各キー P に対してそのキー自身の配列型 P[] を割り当てる
//   P は "apple" のとき "apple"[], "orange" のとき "orange"[] という具合になる
//
// 結果:
// type FruitArrays = {
//   apple: "apple"[];
//   orange: "orange"[];
//   strawberry: "strawberry"[];
// };
type FruitArrays = {
    [P in Fruit]: P[]
};

// ▼ 正しい代入例
const numbers: FruitArrays = {
    apple: ["apple", "apple"],                // "apple"[] に一致
    orange: ["orange", "orange", "orange"],  // "orange"[] に一致
    strawberry: []                            // "strawberry"[] に一致（空配列もOK）
};

// --- 解説 ---
// - Mapped Types で [P in Fruit]: P[] と書くと、各キー P の型はリテラル型の配列になる。
// - つまり orange プロパティには "orange" 以外の文字列は入れられない。
// - このため、orange: ["apple"] のように間違った果物名を入れるとコンパイルエラーになる。
// - ユニオン型の値に応じて配列要素の型を変えるパターンは型安全性が高く、カテゴリ別データの定義に有効。