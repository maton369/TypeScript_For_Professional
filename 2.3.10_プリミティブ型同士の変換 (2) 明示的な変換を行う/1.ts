// Node.js の標準モジュール `readline` から `createInterface` をインポートする。
// これにより、標準入力（キーボード）からの対話的な入力が可能になる。
import { createInterface } from 'readline';

// readline インターフェースを作成する。
// `input: process.stdin` でキーボード入力、`output: process.stdout` でプロンプト表示を行う。
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

// ユーザーに数値入力を促すプロンプトを表示し、入力を受け取る。
// `line` は string 型で渡される。
rl.question('数値を入力してください:', (line) => {
    // 入力された文字列を数値に変換する（Number関数を使用）
    const num = Number(line);

    // 変換した数値に 1000 を足して結果を出力する
    console.log(num + 1000);

    // 入力インターフェースを閉じる（これを忘れるとプロンプトが終了しない）
    rl.close();
});