// `repeatHello` 関数を定義する。
// 引数 `count` は数値型（number）である必要があり、戻り値は文字列型（string）である。
// `String.prototype.repeat()` を使って "hello" を `count` 回繰り返す文字列を返す。
function repeatHello(count: number): string {
    return "hello".repeat(count);
}

// ↓ここで型エラーが発生する理由：
// 関数 `repeatHello` は `number` 型の引数を要求しているにもかかわらず、
// 呼び出し時に `"wow"`（string型）を渡しているため、型の不一致が発生する。
// TypeScript は静的型付け言語であるため、
// このような型の不一致はコンパイルエラーとして検出される。
console.log(repeatHello("wow"));