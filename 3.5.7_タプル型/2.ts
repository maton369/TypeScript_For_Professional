// タプル型 User を定義
// 1番目の要素は name（string 型）、2番目の要素は age（number 型）と名前付きで指定
type User = [name: string, age: number];

// User 型のタプルを定義
const uhyo: User = ["uhyo", 26];

// uhyo[1] は age に対応し、number 型が返る
console.log(uhyo[1]); // 26 と表示される