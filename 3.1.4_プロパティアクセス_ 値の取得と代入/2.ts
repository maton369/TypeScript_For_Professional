// readlineモジュールからcreateInterface関数をインポート
import { createInterface } from 'readline';

// ユーザーからの入力を受け取るインターフェースを作成
const rl = createInterface({
    input: process.stdin,   // 標準入力を使用
    output: process.stdout  // 標準出力を使用
});

// 条件に応じたメッセージを格納したオブジェクト
const messages = {
    good: "0以上の数値が入力されました！",        // 正またはゼロのとき
    bad: "負の数値を入力しないでください！",         // 負の数値のとき
    invalid: "数値を入力してください！"              // 数値でない入力のとき
};

// ユーザーに数値の入力を促す
rl.question('数値を入力してください:', (line) => {
    const num = Number(line); // 入力文字列を数値に変換

    if (isNaN(num)) {
        // 数値でない場合はエラーメッセージを表示
        console.log(messages.invalid);
    } else {
        // 数値が0以上かどうかでメッセージを切り替えて表示
        console.log(messages[num >= 0 ? "good" : "bad"]);
    }

    rl.close(); // 入力インターフェースを閉じる
});