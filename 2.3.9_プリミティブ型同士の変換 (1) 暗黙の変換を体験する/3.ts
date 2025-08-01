import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('数値を入力してください:', (line) => {
    // `line` は文字列なので、数値に変換してから加算する
    const result = Number(line) + 1000;
    console.log(result);
    rl.close();
});