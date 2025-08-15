// Option<T> 型を使用して実際の値を定義する例

// tag が "some" で value に 4 を持つ Option<number> 型の値
const four: Option<number> = {
    tag: "some",
    value: 4
};

// tag が "none" で値を持たない Option<number> 型の値
const nothing: Option<number> = {
    tag: "none"
};

// showNumberIfExists 関数の動作確認
showNumberIfExists(four);    // "4" がコンソールに表示される
showNumberIfExists(nothing); // 何も表示されない