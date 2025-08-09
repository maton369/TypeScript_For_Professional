// ジェネリック型 Family<Parent, Child> を定義
// Parent には number 型、Child には string 型を指定
type Family<Parent, Child> = {
    mother: Parent; // 母の型（今回は number 型）
    father: Parent; // 父の型（今回は number 型）
    child: Child;   // 子供の型（今回は string 型）
};

// Parent が number、Child が string の Family 型を作成
const obj: Family<number, string> = {
    mother: 0,       // number 型 → OK
    father: 100,     // number 型 → OK
    child: "1000"    // string 型 → OK
};

console.log(obj);
/*
出力:
{
  mother: 0,
  father: 100,
  child: "1000"
}
*/