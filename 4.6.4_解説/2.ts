/**
 * 配列の各要素にコールバック関数を適用し、
 * その戻り値からなる新しい配列を返す汎用的な関数
 *
 * @typeParam T - 入力配列の要素の型
 * @typeParam U - 出力配列の要素の型（コールバック関数の戻り値の型）
 *
 * @param array - 処理対象の配列
 * @param callback - 各要素を引数として受け取り、新しい値を返す関数
 * @returns コールバック関数の戻り値からなる新しい配列
 */
function map<T, U>(array: T[], callback: (value: T) => U): U[] {
    const result: U[] = []; // 結果を格納する配列（要素の型はU）

    // for...of 文で配列の要素を順番に取り出す
    for (const elm of array) {
        // コールバック関数で変換し、結果配列に追加
        result.push(callback(elm));
    }

    // 新しく作成した配列を返す
    return result;
}

// 使用例1: number[] → string[]
const numbers = [1, 2, 3];
const numToStr = map(numbers, (n) => `No.${n}`);
console.log(numToStr); // ["No.1", "No.2", "No.3"]

// 使用例2: string[] → number[]
const words = ["apple", "banana"];
const wordLengths = map(words, (word) => word.length);
console.log(wordLengths); // [5, 6]