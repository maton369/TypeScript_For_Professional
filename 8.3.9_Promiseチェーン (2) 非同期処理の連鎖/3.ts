const p1 = readFile("foo.txt", "utf8");  // ① foo.txt を読み込む Promise<string>

const p3 = p1.then((result) => {         // ② 読み込み成功時に処理
    const p2 = repeat10(result);           // ③ repeat10 で新しい Promise<string> を作る
    return p2;                             // ④ それを return
});

p3.then((result) => {                    // ⑤ 最終的に繰り返した文字列を出力
    console.log(result);
});