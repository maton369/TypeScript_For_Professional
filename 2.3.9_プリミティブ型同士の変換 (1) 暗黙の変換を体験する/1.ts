// Node.js 標準モジュール `readline` から `createInterface` 関数をインポートする。
// これは標準入力（キーボード）からの読み取りに使う。
import { createInterface } from 'readline';

// `readline.Interface` オブジェクトを生成する。
// `input: process.stdin` によりキーボード入力を受け取り、
// `output: process.stdout` によりプロンプトや出力を表示する。
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

// `rl.question` により、ユーザーに文字列の入力を促す。
// 第1引数はプロンプトメッセージ（入力を促すテキスト）で、
// 第2引数は入力が完了したときに呼び出されるコールバック関数。
rl.question('文字列を入力してください:', (line) => {
    // ユーザーが入力した文字列が `line` に渡される。
    // 入力内容を文字列展開で出力する。
    console.log(`${line} が入力されました`);

    // `readline.Interface` を閉じて、プロセスを終了する。
    rl.close();
});