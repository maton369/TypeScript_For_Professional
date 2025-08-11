const sum3 = (a: number, b: number, c: number) => a + b + c;

// タプル型 [number, number, number] にすることで、
// nums の要素数と型が固定され、3つの引数に安全に展開できる
const nums: [number, number, number] = [1, 2, 3];

console.log(sum3(...nums)); // 6 と表示される