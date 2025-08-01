// `repeatHello` 関数を定義する。
// 引数 `count` は number 型で、関数の呼び出し元が繰り返し回数を指定する。
// 戻り値の型は string であり、"hello" を `count` 回繰り返した文字列を返す。
// 文字列の繰り返しには、ES6 以降で使用可能な `String.prototype.repeat()` メソッドを利用している。
function repeatHello(count: number): string {
    return "hello".repeat(count);
}