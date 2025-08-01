// `result` は BigInt 型の定数で、`5n / 2n` の結果を代入している。
// `5n` および `2n` は BigInt リテラルであり、BigInt 同士の除算を行うことができる。
const result = 5n / 2n;

// BigInt の除算は **小数点以下を切り捨てる（常に整数になる）**。
// よって、5 ÷ 2 = 2.5 ではなく、`2n` が結果となる。
console.log(result); // 出力: 2n