const sum = (...args: number[]): number => {
    let result = 0; // 合計値の初期化
    for (const num of args) {
        result += num; // 可変長引数の各値を加算
    }
    return result; // 合計値を返す
};

const nums = [1, 2, 3, 4, 5];

// スプレッド構文(...)で配列を展開して引数として渡す
console.log(sum(...nums)); // 1 + 2 + 3 + 4 + 5 = 15