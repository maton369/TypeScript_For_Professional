// `n` は型注釈 `null` を持つ定数であり、値として `null` が代入されている。
// `null` 型は、`strictNullChecks` が有効な場合に限り、明示的に型として扱うことができる。
const n: null = null;

// `u` は型注釈 `undefined` を持つ定数であり、値として `undefined` が代入されている。
// `undefined` 型も同様に、`strictNullChecks` が有効なときに型安全に取り扱われる。
const u: undefined = undefined;