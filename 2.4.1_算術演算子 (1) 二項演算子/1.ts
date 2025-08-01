// 数値の加算（1024 + 314 + 500 = 1838）
const addResult = 1024 + 314 + 500;
console.log(addResult); // 1838 と表示される

// 合計金額に対して 30% 割引（×0.7）を適用
const discounted = addResult * 0.7;
console.log(discounted); // 1286.6 と表示される（浮動小数点演算）

// 2 の平方根を求める（2 の 0.5 乗）
// Math.sqrt(2) と同等
const sqrt2 = 2 ** 0.5;
console.log(sqrt2);     // 1.4142135623730951 と表示される
console.log(sqrt2 - 1); // 約 0.4142 と表示（1 を引く）

// 通常の除算（18 ÷ 12 = 1.5）→ 小数になる
console.log(18 / 12);   // 1.5 と表示される

// BigInt の除算は整数結果のみ返す（小数部分は切り捨て）
console.log(18n / 12n); // 1n と表示される

// 剰余演算（18 ÷ 12 の余り → 6）
console.log(18 % 12);   // 6 と表示される

// BigInt による剰余演算も可能（同様に 6n）
console.log(18n % 12n); // 6n と表示される