import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,   // 入力元（キーボード入力）
    output: process.stdout  // 出力先（コンソール）
});

rl.question('文字列を入力してください:', (line) => {
    // 文字列が入力されるとここが実行される
    console.log(`${line} が入力されました`);
    rl.close();
});