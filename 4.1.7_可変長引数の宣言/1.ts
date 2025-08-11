// ✅ 可変長引数（Restパラメータ）を使った合計計算関数
const sum = (...args: number[]): number => {
    let result = 0;

    // 引数として受け取った配列をループ処理
    for (const num of args) {
        result += num;
    }

    return result;
};

// テスト出力
console.log(sum(1, 10, 100)); // 111 と表示される
console.log(sum(123, 456));   // 579 と表示される
console.log(sum());           // 0 と表示される