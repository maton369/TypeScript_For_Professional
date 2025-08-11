// minからmaxまでの連続した整数を配列として返す関数
function range(min: number, max: number): number[] {
    const result: number[] = []; // 結果を格納する配列（number型配列）

    // minからmaxまで1ずつ増加させながら配列に追加
    for (let i = min; i <= max; i++) {
        result.push(i);
    }

    return result; // 最終的な配列を返す
}

// 実行例
console.log(range(5, 10)); // [5, 6, 7, 8, 9, 10] と表示される