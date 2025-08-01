// Node.js の標準モジュール readline から createInterface 関数をインポート
import { createInterface } from 'readline';

// ユーザーからの標準入力（stdin）および標準出力（stdout）を設定して、インターフェースを作成
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

// ユーザーにパスワード入力を求めるプロンプトを表示
rl.question('パスワードを入力してください:', (password) => {
    // 入力されたパスワードが "hogehoge" と一致するかを厳密比較する
    if (password === 'hogehoge') {
        // 正しいパスワードの場合は歓迎メッセージを表示
        console.log('ようこそ！');
    } else {
        // 間違っている場合は知らない人として拒否
        console.log('誰？');
    }

    // 入力受付を終了し、標準入力を閉じる
    rl.close();
});