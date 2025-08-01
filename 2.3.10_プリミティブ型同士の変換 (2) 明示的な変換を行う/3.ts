// 文字列 "1234" を BigInt に変換する
// 数値として解釈可能な文字列であれば、BigInt コンストラクタは問題なく処理できる
const bigint1 = BigInt("1234");
console.log(bigint1); // 1234n と表示される

// 数値 500 を BigInt に変換する
// 通常の number 値も整数であれば直接 BigInt に変換可能である
const bigint2 = BigInt(500);
console.log(bigint2); // 500n と表示される

// 真理値 true を BigInt に変換すると 1n になる
// true → 1、false → 0 に変換された上で、BigInt 化される
const bigint3 = BigInt(true);
console.log(bigint3); // 1n と表示される