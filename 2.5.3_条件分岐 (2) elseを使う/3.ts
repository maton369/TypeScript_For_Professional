// num の値に応じて、負・ゼロ・正のいずれかを判定する
if (num < 0) {
    // num が 0 より小さい場合、つまり負の数である場合にこのブロックが実行される
    console.log("numは負の数です");
} else {
    // num が負の数でなかった場合、ここに入る（つまり num は 0 以上）
    if (num === 0) {
        // num が 0 と等しい場合
        console.log("numは0です");
    } else {
        // num が 0 より大きい（正の数）の場合
        console.log("numは正の数です");
    }
}