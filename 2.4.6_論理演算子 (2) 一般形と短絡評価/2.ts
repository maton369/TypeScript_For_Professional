// Node.js の readline モジュールから標準入力用インターフェースをインポート
import { createInterface } from 'readline';

// 標準入力（キーボード入力）と標準出力を使った readline インターフェースを作成
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

// ユーザーに「名前を入力してください」と尋ねる
rl.question('名前を入力してください:', (name) => {
    // 入力が空文字・null・undefinedなどのfalsy値なら "名無し" を使用する（デフォルト値を与える）
    const displayName = name || "名無し";

    // 入力された名前または "名無し" を使って挨拶を表示
    console.log(`こんにちは、${displayName}さん`);

    // 入力を受け付けるインターフェースを閉じる
    rl.close();
});