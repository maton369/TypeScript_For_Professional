// 数値の配列を定義
const arr = [1, 2, 4, 8, 16, 32];

// 配列の分割代入
// 配列の先頭から順に、1つ目→first, 2つ目→second, 3つ目→third に代入される
const [first, second, third] = arr;

console.log(first);  // 1 が表示される（arr[0]）
console.log(second); // 2 が表示される（arr[1]）
console.log(third);  // 4 が表示される（arr[2]）