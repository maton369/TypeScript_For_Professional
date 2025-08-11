// n回 "Hello, world!" を表示する関数（ただし100回以上は制限）
function helloWorldNTimes2(n: number): void {
    // もし n が 100 以上なら制限メッセージを表示して終了
    if (n >= 100) {
        console.log(`${n}回なんて無理です！！！`);
        return; // ここで関数を終了
    }
    // n が 100 未満なら n 回ループして出力
    for (let i = 0; i < n; i++) {
        console.log("Hello, world!");
    }
}

// 呼び出し例1: 5回出力
helloWorldNTimes2(5);
// 呼び出し例2: 150回は制限オーバーのため警告メッセージ
helloWorldNTimes2(150);