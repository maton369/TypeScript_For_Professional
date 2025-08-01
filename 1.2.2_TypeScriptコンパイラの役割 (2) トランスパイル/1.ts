// トランスパイル前（TypeScript）
// `count` に number 型の注釈が付いており、
// この関数は "hello" を count 回繰り返した文字列を返す。
function repeatHello(count: number): string {
    return "hello".repeat(count);
}

// トランスパイル後（JavaScript）
// TypeScript の型注釈がすべて取り除かれ、純粋な JavaScript 関数として出力される。
// 動作は同じだが、引数や戻り値の型情報は存在しない（静的検査もできない）。
function repeatHello(count) {
    return "hello".repeat(count);
}