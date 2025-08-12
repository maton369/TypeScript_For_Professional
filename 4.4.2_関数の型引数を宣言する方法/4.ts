// ジェネリック関数 pair の定義
// <Left, Right> は型パラメータで、引数 left の型と right の型をそれぞれ表す
// 戻り値の型は [Left, Right] というタプル型（最初の要素が Left 型、2番目が Right 型）
const pair = <Left, Right>(left: Left, right: Right): [Left, Right] => [left, right];

// 関数を呼び出すと、TypeScript が Left と Right の型を推論する
// この場合、Left = string, Right = number と推論される
// したがって p の型は [string, number] になる
const p = pair("uhyo", 26);

// 出力例
console.log(p);
// => ["uhyo", 26]