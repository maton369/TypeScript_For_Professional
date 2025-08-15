// Option<T> の "some" ケースだけを取り出す型ガードである。
// Extract<Option<T>, { tag: "some" }> は、Option<T> の構成要素のうち
// { tag: "some" } に代入可能な部分（= { tag: "some"; value: T }）だけを抽出するである。
function isSome<T>(obj: Option<T>): obj is Extract<Option<T>, { tag: "some" }> {
    return obj.tag === "some";
}