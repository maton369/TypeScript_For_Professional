// 引数 n の回数だけ "Hello, world!" をコンソールに出力する関数
function helloWorldNTimes(n: number): void {
    // i が 0 から n-1 までループ
    for (let i = 0; i < n; i++) {
        console.log("Hello, world!"); // 1回のループごとに出力
    }
}

// 関数を呼び出し、5回 "Hello, world!" を出力
helloWorldNTimes(5);