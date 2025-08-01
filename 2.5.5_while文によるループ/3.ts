let i = 1;

// i が 100 以下の間、ループを継続
while (i <= 100) {
    i++; // i をインクリメント

    // i が奇数ならこの周の残りの処理（console.log）をスキップして次のループへ
    if (i % 2 === 1) {
        continue;
    }

    // i が偶数のときのみ、値を表示する
    console.log(i);
}