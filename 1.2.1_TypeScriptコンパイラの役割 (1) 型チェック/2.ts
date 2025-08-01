// 引数 `value` を2倍して出力する関数（数値版）
function double(value: number) {
    console.log(value * 2);
}

// 同じ関数名で、引数 `value` を2回繰り返して出力する関数（文字列版）
function double(value: string) {
    console.log(value.repeat(2));
}

// `number` 型の引数 → 2倍の値が出力される想定
double(123);

// `string` 型の引数 → 2回繰り返された文字列が出力される想定
double("hello");