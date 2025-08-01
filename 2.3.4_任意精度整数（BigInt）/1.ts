// `bignum` は `bigint` 型として宣言された定数である。
// `123n` や `456n` は BigInt リテラル（末尾の `n` が目印）であり、非常に大きな整数を扱うことができる。
// 演算 `(123n + 456n) * 2n` は BigInt 同士の加算および乗算を行っており、結果は 1158n。
const bignum: bigint = (123n + 456n) * 2n;

// 計算結果をコンソールに出力する。
// 出力: 1158n（BigInt型の出力には `n` が付く）
console.log(bignum);