// フィボナッチ数列の一部を含む配列
const arr = [1, 1, 2, 3, 5, 8, 13];

// 配列の分割代入
// first → 最初の要素（1）
// second → 2番目の要素（1）
// third → 3番目の要素（2）
// rest → 残りの要素（[3, 5, 8, 13]）
const [first, second, third, ...rest] = arr;

console.log(first);  // 1 が表示される
console.log(second); // 1 が表示される
console.log(third);  // 2 が表示される
console.log(rest);   // [3, 5, 8, 13] が表示される