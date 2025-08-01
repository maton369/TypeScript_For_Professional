// 0 以外の数値は true（真）と判定される
console.log(Boolean(123)); // true と表示される

// 数値 0 は false（偽）と判定される
console.log(Boolean(0)); // false と表示される

// BigInt 型でも同様に、0n は false、その他は true となる
console.log(Boolean(1n)); // true と表示される
console.log(Boolean(0n)); // false と表示される

// 空文字列は false（偽）と判定される
console.log(Boolean("")); // false と表示される

// 1文字以上ある文字列は true（真）と判定される
console.log(Boolean("foobar")); // true と表示される

// null は「値が存在しない」ことを示すため、false と評価される
console.log(Boolean(null)); // false と表示される

// undefined は「未定義の値」を表し、false と評価される
console.log(Boolean(undefined)); // false と表示される