// readline モジュールから createInterface 関数をインポートする
import { createInterface } from 'readline';

// readline インターフェースの作成
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

// ユーザーに数値の入力を求める
rl.question('数値を入力してください:', (line) => {
    // 1000 を足して出力
    console.log(line + 1000);

    // readline を閉じる
    rl.close();
});