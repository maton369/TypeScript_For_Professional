// Node.js の readline モジュールから createInterface をインポート
import { createInterface } from 'readline';

// ユーザー入力の受け付けインターフェースを作成（標準入力と標準出力を使用）
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

// 質問プロンプトを表示して、ユーザーに数値の入力を求める
rl.question('数値を入力してください:', (line) => {
    // 入力された文字列を数値に変換する
    const num = Number(line);

    // num が 0以上かつ100未満かを判定
    if (0 <= num && num < 100) {
        // 条件を満たす場合の出力
        console.log(`${num}は0以上100未満です`);
    } else {
        // 条件を満たさない場合の出力
        console.log(`${num}は0以上100未満ではありません`);
    }

    // 入力の受付を終了する
    rl.close();
});