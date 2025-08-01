// 2つの文字列変数を定義する
// input1 は「123」という非空の文字列、input2 は空文字列
const input1 = "123", input2 = "";

// 「!!」を使って、文字列が空でない（＝truthy）かを真偽値で評価する
// input1 は非空文字列のため truthy → !!input1 は true になる
const input1isNotEmpty = !!input1;
console.log(input1isNotEmpty); // true と表示される

// input2 は空文字列のため falsy → !!input2 は false になる
const input2isNotEmpty = !!input2;
console.log(input2isNotEmpty); // false と表示される