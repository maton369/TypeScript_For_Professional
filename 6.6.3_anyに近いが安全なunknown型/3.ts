function useUnknown(val: unknown) {
    // 型ガードで val が string 型かどうかを判定する
    if (typeof val === "string") {
        // このブロック内では val は string 型に絞り込まれる
        console.log("valは文字列です");
        console.log(val.slice(0, 5)); // 先頭5文字を切り出して表示
    } else {
        // string 型以外の場合はこちらに入る
        console.log("valは文字列以外の何かです");
        console.log(val); // そのまま表示
    }
}

// "foobar" は string 型なので最初のブロックが実行される
useUnknown("foobar");
// null は string 型ではないので else 側が実行される
useUnknown(null);