const arr = [1, 2, 4, 8, 16, 32];

// 配列の分割代入で、特定のインデックスの値だけを変数に代入する
// カンマ(,)を使ってスキップする要素を指定できる
// この場合、
//   foo ← arr[1] (2)
//   bar ← arr[3] (8)
//   baz ← arr[5] (32)
// arr[0], arr[2], arr[4] は変数に代入せずスキップする
const [, foo, , bar, , baz] = arr;

console.log(foo); // 2 が表示される
console.log(bar); // 8 が表示される
console.log(baz); // 32 が表示される