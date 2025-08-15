// Option<T> 型の定義（値がある場合とない場合を区別）
type Option<T> =
    | {
        hasValue: true;
        value: T;
    }
    | {
        hasValue: false;
    };

// 値がある場合かどうかを判定する型ガード関数
function isSome<T>(obj: Option<T>): obj is { hasValue: true; value: T } {
    return obj.hasValue;
}

function showNumberIfExists(obj: Option<number>) {
    if (isSome(obj)) {
        // isSome による型ガードにより obj は { hasValue: true; value: number } 型になる
        // そのためコンパイルエラーは発生せず、安全に value にアクセス可能
        console.log(obj.value);
    }
}

const four: Option<number> = { hasValue: true, value: 4 };
const nothing: Option<number> = { hasValue: false };

showNumberIfExists(four);    // 4
showNumberIfExists(nothing); // 何も表示されない