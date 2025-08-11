const sum3 = (a: number, b: number, c: number) => a + b + c;

const nums = [1, 2, 3];
// エラー: A spread argument must either have a tuple type or be passed to a rest parameter.
// 理由: nums の型が number[]（可変長配列）になっており、3つの引数に
// 安全に展開できる保証がないため、TypeScriptがエラーを出している。
console.log(sum3(...nums));