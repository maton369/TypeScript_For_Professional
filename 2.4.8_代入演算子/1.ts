// readline モジュールから標準入出力インターフェースを生成する関数をインポート
import { createInterface } from 'readline';

// ユーザーの標準入力（キーボード）と標準出力（画面）を使ってインターフェースを作成
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

// ユーザーに名前の入力を促す（非同期で処理される）
rl.question('名前を入力してください:', (name) => {
    // 入力された名前が空文字列の場合は "名無し" に置き換える
    if (name === '') {
        name = '名無し';
    }

    // あいさつメッセージを表示
    console.log(`こんにちは、${name}さん`);

    // readlineインターフェースを閉じて、入力を終了
    rl.close();
});