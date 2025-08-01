// 負の数と 0 の大小比較：-5 は 0 より小さいので true
const left1 = -5, right1 = 0;
console.log(left1 < right1); // true と表示される

// BigInt 型同士の比較：100n は 50n 以上なので true
const left2 = 100n, right2 = 50n;
console.log(left2 >= right2); // true と表示される

// -10 は 0 より大きくないので false
const left3 = -10, right3 = 0;
console.log(left3 > right3); // false と表示される

// BigInt 型同士の比較：12n は 8n 以下ではないので false
const left4 = 12n, right4 = 8n;
console.log(left4 <= right4); // false と表示される