// Promise コンストラクタを使って、新しい Promise<number> を作成
// resolve が呼ばれると Promise の状態は「fulfilled（成功）」になる
const p = new Promise<number>((resolve) => {
    // 3 秒後にコールバックを実行
    setTimeout(() => {
        // resolve に 100 を渡して成功させる
        resolve(100);
    }, 3000);
});

// then: Promise が成功状態になったときに呼ばれる処理
p.then((num) => {
    // resolve(100) により num には 100 が入る
    console.log(`結果は${num}`);
});