// エラーの理由:
// range 関数は return 文を持たないため、戻り値の型は void になる。
// しかし for...of 構文は「イテラブルなオブジェクト」（配列など）にしか使えない。
// void 型の値には [Symbol.iterator]() メソッドが存在しないのでエラーになる。

function range(min: number, max: number) {
    const result: number[] = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
}

const arr = range(5, 10);

// arr は number[] 型なので for...of が使える
for (const value of arr) console.log(value);

// 出力:
// 5
// 6
// 7
// 8
// 9
// 10