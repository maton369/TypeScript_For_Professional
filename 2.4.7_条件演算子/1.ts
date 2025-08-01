// readline モジュールから標準入力インターフェースを作成する関数をインポート
import { createInterface } from 'readline';

// ユーザーの標準入力と標準出力を用いて readline インターフェースを構築
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

// ユーザーに数値の入力を促す
rl.question('数値を入力してください:', (line) => {
    // 入力値（文字列）を数値に変換
    const num = Number(line);

    // 条件演算子（? :）を使って、num が 0以上100未満 かどうかで出力メッセージを分岐
    const message = 0 <= num && num < 100
        ? `${num}は0以上100未満です`
        : `${num}は0以上100未満ではありません`;

    // 条件に応じたメッセージを出力
    console.log(message);

    // readlineインターフェースを閉じる
    rl.close();
});