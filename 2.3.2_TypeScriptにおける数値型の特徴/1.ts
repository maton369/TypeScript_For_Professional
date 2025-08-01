// `width1` は底辺の一方の長さ（5）を表す定数。
// 型注釈は省略されているが、数値リテラルから `number` 型と自動的に推論される。
const width1 = 5;

// `width2` はもう一方の底辺の長さ（8）を表す定数。
const width2 = 8;

// `height` は台形の高さ（3）を表す定数で、明示的に `number` 型の注釈が付けられている。
const height: number = 3;

// `area` は台形の面積を計算している。
// 台形の面積の公式： (上底 + 下底) × 高さ ÷ 2
// (5 + 8) × 3 ÷ 2 = 13 × 3 ÷ 2 = 39 ÷ 2 = 19.5
const area = (width1 + width2) * height / 2;

// `area` を標準出力に表示する。
// 出力: 19.5
console.log(area);