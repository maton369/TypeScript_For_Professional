// `repeatHello` 関数を定義する。
// 引数 `count` は数値型（number）であり、戻り値は文字列型（string）である。
// `"hello"` を `count` 回繰り返した文字列を返す。
// ここでは `String.prototype.repeat()` メソッドを利用している。
function repeatHello(count: number): string {
    return "hello".repeat(count);
}

// ↓正しい引数（数値 10）を渡しているため、型エラーは発生しない。
// 引数 `count` に 10 を渡しているので、
// 出力結果は "hello" が 10 回連続して並んだ文字列になる。
console.log(repeatHello(10));