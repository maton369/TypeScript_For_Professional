// foo というオブジェクトを定義（プロパティ num を持つ）
const foo = { num: 1234 };

// スプレッド構文を使って foo を複製し、bar を作成（値は同じだが別オブジェクト）
const bar = { ...foo }; // { num: 1234 } になる

// bar.num の値を表示（foo のコピーなので 1234 が出力される）
console.log(bar.num); // 1234 と表示される

// bar.num に 0 を代入（bar は foo のコピーなので foo には影響しない）
bar.num = 0;

// foo.num の値を表示（bar を変更しても foo は変わらない）
console.log(foo.num); // 1234 と表示される