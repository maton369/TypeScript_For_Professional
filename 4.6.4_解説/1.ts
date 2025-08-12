/**
 * 配列の各要素にコールバック関数を適用し、
 * その戻り値からなる新しい配列を返す関数
 * 
 * @param array - 対象となる数値配列
 * @param callback - 各要素を引数として受け取り、変換後の数値を返す関数
 * @returns 変換後の新しい配列
 */
function map(array: number[], callback: (value: number) => number): number[] {
    const result: number[] = []; // 結果を格納する配列

    // for...of で配列の各要素を順番に取り出す
    for (const elm of array) {
        // コールバック関数を適用し、その結果を result に追加
        result.push(callback(elm));
    }

    // 完成した新しい配列を返す
    return result;
}

// 使用例
const nums = [1, 2, 3];
const doubled = map(nums, (x) => x * 2);
console.log(doubled); // [2, 4, 6]