const sum = (base: number, ...args: number[]): number => {
    let result = base * 1000; // 最初の引数baseを1000倍して初期値にする
    for (const num of args) {
        result += num; // 2番目以降の引数を順に加算
    }
    return result;
};

console.log(sum(1, 10, 100)); // 1*1000 + 10 + 100 = 1110
console.log(sum(123, 456));   // 123*1000 + 456 = 123456

// ❌ コンパイルエラー
// エラー: Expected at least 1 arguments, but got 0.
// 理由: baseは必須パラメータでデフォルト値がないため、引数なしで呼び出せない
console.log(sum());