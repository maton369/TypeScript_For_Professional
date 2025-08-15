// Option 型を定義
type Some<T> = {
    tag: "some";
    value: T;
};
type None = {
    tag: "none";
};
type Option<T> = Some<T> | None;

// 型ガード: Option が Some<T> かどうかを判定する
function isSome<T>(obj: Option<T>): obj is Some<T> {
    return obj.tag === "some";
}

// mapOption 関数
// Option が Some<T> の場合は値を変換し Some<U> を返す
// None の場合はそのまま None を返す
function mapOption<T, U>(obj: Option<T>, fn: (value: T) => U): Option<U> {
    if (isSome(obj)) {
        return { tag: "some", value: fn(obj.value) };
    }
    return { tag: "none" };
}

// doubleOption 関数
// Option<number> が Some の場合は値を2倍にする
function doubleOption(obj: Option<number>) {
    return mapOption(obj, x => x * 2);
}

// 使用例
const four: Option<number> = { tag: "some", value: 4 };
const nothing: Option<number> = { tag: "none" };

console.log(doubleOption(four));    // { tag: "some", value: 8 }
console.log(doubleOption(nothing)); // { tag: "none" }