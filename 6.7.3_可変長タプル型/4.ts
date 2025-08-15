// ▼ 基本タプル型の定義
type NSN = [number, string, number];
// NSN は [number, string, number] という3要素タプル型である。

// ▼ タプル展開の例
// SNSNS = [string, ...NSN, string]
//        = [string, number, string, number, string] となる。
type SNSNS = [string, ...NSN, string];

// --- 解説 ---
// `...NSN` の部分は、タプル型 NSN ([number, string, number]) の要素を展開して挿入する。
// よって先頭の `string` の後に `number, string, number` が入り、最後に `string` が付く。
//
// 結果: [string, number, string, number, string]
//
// こうした「タプル型の展開」は、関数の引数型合成や可変長データの結合パターンを表すのに有効である。