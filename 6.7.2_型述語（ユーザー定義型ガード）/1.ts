// ユーザー定義型ガード関数である
// 戻り値の型注釈 `value is string | number` により、
// true が返された場合、呼び出し元で value の型が string | number に絞り込まれる
function isStringOrNumber(value: unknown): value is string | number {
    // typeof 演算子で型を判定し、string または number なら true を返す
    return typeof value === "string" || typeof value === "number";
}

// ここでは something の型は unknown であり、まだ何も型の保証がない
const something: unknown = 123;

// isStringOrNumber により型を絞り込み可能になる
if (isStringOrNumber(something)) {
    // このブロック内では something の型は string | number に限定される
    // そのため、string と number 双方が持つメソッド toString が安全に呼び出せる
    console.log(something.toString());
}