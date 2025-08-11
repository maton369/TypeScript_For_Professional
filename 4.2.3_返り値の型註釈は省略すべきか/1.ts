// range 関数: min から max までの連続する数値を配列として返す
function range(min: number, max: number): number[] {
    const result: number[] = []; // 返す配列（数値配列）
    // min から max まで 1 ずつ加算しながら格納
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}

// 5 から 10 までの配列を作成
const arr = range(5, 10);

// for...of 文で配列の各要素を順に出力
for (const value of arr) console.log(value);

// 出力:
// 5
// 6
// 7
// 8
// 9
// 10