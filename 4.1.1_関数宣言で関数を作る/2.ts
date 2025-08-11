// minからmaxまでの連続した整数を配列として返す関数
function range(min: number, max: number): number[] {
    const result: number[] = []; // number型の配列を用意

    for (let i = min; i <= max; i++) {
        result.push(i); // i を配列に追加
    }

    return result; // 完成した配列を返す
}

// 正しい呼び出し例（OK）
console.log(range(5, 10)); // [5, 6, 7, 8, 9, 10]

// 誤った呼び出し例
// エラー: 引数が string 型なので number 型のパラメータに代入できない
range("5", "10");

// エラー: 引数が1つしか渡されていないため、2つ必要なところで不足
range(5);