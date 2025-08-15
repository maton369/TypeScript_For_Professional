// ▼ エラー例その1: タプル中の ...配列型（rest element）は**1回のみ**、かつ**最後の位置**でなければならないである。
//    ここでは string の rest と、その後に number、さらに string の rest を置いており規則違反である。
type T1 = [number, ...string[], number, ...string[]]; // ❌ コンパイルエラー

// ▼ エラー例その2: rest は**最後**にしか置けないである。
//    string の rest のあとに number の rest を続けて置いている（しかも末尾ではない）ため規則違反である。
type T2 = [number, ...string[], ...number[], string]; // ❌ コンパイルエラー

// ▼ エラー例その3: rest の**後ろに**オプショナル要素（?）を置くことはできないである。
//    rest は可変長のため、その後ろの位置が確定せず、オプショナル要素の位置規則と両立しない。
type T3 = [number, ...string[], number?]; // ❌ コンパイルエラー

// --- 参考: 正しい書き方の例 ---
// 最後に rest を1回だけ置く（OK）
type OK1 = [number, ...string[]];

// 先頭に固定要素、最後に rest（OK）
type OK2 = [number, string, ...number[]];

// 可変長の string 群を置き、末尾に固定要素は不可 → 必要なら union などで表現を分けるべきである。
// 例: 「中間に 0 個以上の string、末尾は number」にしたい場合
type NumberStringNumber = [number, ...string[], number]; // ✅（末尾が固定なら OK）
// ただしこの形で**さらに**末尾に可変要素を続けることはできない（T1 がNGだった理由と同じ）である。