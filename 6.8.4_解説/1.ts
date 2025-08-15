// Option<T> 型の定義（tagでsome/noneを区別するバージョン）
type Option<T> =
    | {
        tag: "some";
        value: T;
    }
    | {
        tag: "none";
    };

// 型ガード関数
function isSome<T>(obj: Option<T>): obj is { tag: "some"; value: T } {
    // tag が "some" なら value プロパティが存在することを保証
    return obj.tag === "some";
}

// 使用例
function showNumberIfExists(obj: Option<number>) {
    if (isSome(obj)) {
        // isSome によって obj は { tag: "some"; value: number } 型に絞り込まれる
        console.log(obj.value);
    }
}

const four: Option<number> = { tag: "some", value: 4 };
const nothing: Option<number> = { tag: "none" };

showNumberIfExists(four);    // 4
showNumberIfExists(nothing); // 何も表示されない