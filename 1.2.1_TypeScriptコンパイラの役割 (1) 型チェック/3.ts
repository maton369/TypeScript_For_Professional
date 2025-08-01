// `double` 関数を定義する。
// 引数 `value` は `string` または `number` 型のいずれかを受け取るユニオン型である。
function double(value: string | number) {
    // 型ガード（type guard）を用いて、引数の型を分岐する。
    // `typeof value === "number"` の場合、`value` は数値型として扱われる。
    if (typeof value === "number") {
        console.log(value * 2);  // 数値を2倍して出力する
    } else {
        // それ以外（つまり string 型）の場合
        console.log(value.repeat(2));  // 文字列を2回繰り返して出力する
    }
}

// 数値 123 を渡すと、2倍の結果が出力される。
double(123);       // 出力: 246

// 文字列 "hello" を渡すと、"hello" を2回繰り返した文字列が出力される。
double("hello");   // 出力: hellohello