// Option<T> は、値が存在する場合（"some"）と存在しない場合（"none"）を表す型である。
// - tag が "some" の場合は value プロパティに T 型の値が入る
// - tag が "none" の場合は value プロパティを持たない
type Option<T> =
    | {
        tag: "some";
        value: T;
    }
    | {
        tag: "none";
    };

// number 型を格納する Option 型の値を受け取り、
// 値が存在する場合のみコンソールに表示する関数である。
function showNumberIfExists(obj: Option<number>): void {
    // タグが "some" なら値が存在する
    if (obj.tag === "some") {
        // obj はここで { tag: "some"; value: number } 型に絞り込まれる
        console.log(obj.value);
    }
}