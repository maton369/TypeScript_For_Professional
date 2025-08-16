// Node.jsの標準モジュール "readline" から createInterface 関数をインポート
import { createInterface } from 'readline';

// 標準入力と標準出力を使ってインターフェースを作成
// これにより、ユーザーからの入力を受け取ることができる
const rl = createInterface({
    input: process.stdin,   // 入力元: 標準入力（キーボード入力など）
    output: process.stdout  // 出力先: 標準出力（コンソール）
});

// rl.question() は、第一引数の文字列を表示してユーザー入力を待つ
// 入力が終わると第二引数のコールバック関数が呼ばれる
rl.question('文字列を入力してください:', (line) => {
    // line にはユーザーが入力した文字列が入る
    console.log(`${line} が入力されました`);

    // 入力受付を終了し、プログラムを終了できる状態にする
    rl.close();
});