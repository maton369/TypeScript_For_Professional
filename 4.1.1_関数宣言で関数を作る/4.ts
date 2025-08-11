console.log(range(5, 10)); // [5, 6, 7, 8, 9, 10] と表示される

// minからmaxまでの連続した整数を格納した配列を返す関数
function range(min: number, max: number): number[] {
    const result: number[] = []; // 結果を格納する配列（number型限定）

    // minからmaxまで1ずつ増やしながら配列に追加
    for (let i = min; i <= max; i++) {
        result.push(i);
    }

    return result; // 完成した配列を返す
}