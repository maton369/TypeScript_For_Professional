const left: number = 1;
const right: number = 2;

// 厳密等価演算子：値も型も一致していなければ false を返す
// 1 と 2 は異なるので false
console.log(left === right); // false が表示される

// 厳密不等価演算子：値または型が一致しなければ true を返す
// 1 と 2 は異なるので true
console.log(left !== right); // true が表示される