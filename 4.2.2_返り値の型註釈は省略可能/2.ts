// g 関数を定義
// 引数 num 回だけ "Hello, world!" をコンソールに出力する
const g = (num: number) => {
    // 0 から num-1 までループ
    for (let i = 0; i < num; i++) {
        console.log("Hello, world!");
    }
};

// 実行例
g(3);
// 出力:
// Hello, world!
// Hello, world!
// Hello, world!