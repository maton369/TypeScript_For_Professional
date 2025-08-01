// Node.js の readline モジュールから createInterface 関数をインポート
import { createInterface } from 'readline';

// 標準入力（stdin）と標準出力（stdout）を使ってインターフェースを作成
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

// ユーザーに名前の入力を促すプロンプトを表示
rl.question('名前を入力してください:', (name) => {
    // ユーザーが入力した名前を受け取り、挨拶メッセージとして出力
    console.log("こんにちは、" + name + "さん");

    // 入力インターフェースを閉じる（プロセスが終了する）
    rl.close();
});