// ✅ 数値配列を定義
const arr = [1, 10, 100];

// includes(100) → 配列に 100 が含まれるので true
console.log(arr.includes(100)); // true と表示される

// includes(50) → 配列に 50 は含まれないので false
console.log(arr.includes(50));  // false と表示される

// ❌ コンパイルエラー
// arr は number[] 型なので、includes の引数も number 型である必要がある
// "foobar" は string 型であり、number 型には代入できないためエラー
console.log(arr.includes("foobar"));