// 論理値（真偽値）を定義
const t = true, f = false;

// 論理積（AND）演算：両方が true のときのみ true
console.log(t && t); // true：両方とも true
console.log(t && f); // false：片方が false
console.log(f && f); // false：両方とも false

// 論理和（OR）演算：どちらかが true なら true
console.log(t || t); // true：どちらも true
console.log(t || f); // true：片方が true
console.log(f || f); // false：両方とも false