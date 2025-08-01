// readline モジュールから標準入力インターフェースを作成する関数をインポート
import { createInterface } from 'readline';

// 入出力インターフェースを作成（標準入力と標準出力を使用）
const rl = createInterface({
    input: process.stdin,  // 標準入力
    output: process.stdout // 標準出力
});

// ユーザーにコマンド入力を促す
rl.question('コマンドを入力してください: ', (name) => {
    // 入力値 name に応じて処理を分岐する
    switch (name) {
        case "greet":
            // "greet" と入力された場合の処理
            console.log("こんにちは。");
            break;

        case "cat":
            // "cat" と入力された場合の処理
            console.log("あなたは猫派ですか？");
            console.log("私は犬派です。");
            break;

        default:
            // 上記以外のコマンドが入力された場合の処理
            console.log(`コマンド「${name}」を認識できませんでした。`);
    }

    // 入力インターフェースを閉じる
    rl.close();
});