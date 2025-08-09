// tuple は [string, number] 型のタプル
// 最初の要素は string、2番目の要素は number
const tuple: [string, number] = ["uhyo", 26];

// 分割代入により、タプルの要素を変数に展開する
// myName には tuple[0]（string型）が入り、age には tuple[1]（number型）が入る
const [myName, age] = tuple;

console.log(myName); // "uhyo" と表示される
console.log(age);    // 26 と表示される