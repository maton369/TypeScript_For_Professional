// エラー理由の要約である：
// T[K] という「インデックス型アクセス」を行うには、K が T のキーであることを
// 型レベルで保証する必要がある。しかし元の定義では K に制約が無く、
// 「任意の型 K」を T のインデックスとして用いているため
//   Type 'K' cannot be used to index type 'T'.
// というエラーになるのである。

// ✅ 修正版：K を keyof T に制約するである
function get<T, K extends keyof T>(obj: T, key: K): T[K] {
    // ここで key は "T のキーのいずれか" に限定されるため、obj[key] は型的に安全である
    return obj[key];
}