// エラーの理由:
// この関数 range の戻り値型は number[] と明示しているため、必ず配列を返さなければならない。
// しかし return 文がないので、TypeScript がエラーを出している。

function range(min: number, max: number): number[] {
    const result: number[] = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
}

const arr = range(5, 10);

// arr の各要素を順番に出力
for (const value of arr) console.log(value);

// 出力:
// 5
// 6
// 7
// 8
// 9
// 10