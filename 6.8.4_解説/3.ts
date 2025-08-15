// "some" ケースを判定する型ガード関数である
// 戻り値の型 `obj is Some<T>` により、true の場合 obj が Some<T> 型に絞り込まれる
function isSome<T>(obj: Option<T>): obj is Some<T> {
    return obj.tag === "some";
}