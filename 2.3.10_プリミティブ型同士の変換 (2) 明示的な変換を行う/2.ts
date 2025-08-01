// 真（true）を数値に変換すると 1 になる
const num1 = Number(true);
console.log(num1); // 1 と表示される

// 偽（false）を数値に変換すると 0 になる
const num2 = Number(false);
console.log(num2); // 0 と表示される

// null を数値に変換すると 0 になる（明示的な「無」の値は 0 扱いされる）
const num3 = Number(null);
console.log(num3); // 0 と表示される

// undefined を数値に変換すると NaN（Not a Number）になる
const num4 = Number(undefined);
console.log(num4); // NaN と表示される