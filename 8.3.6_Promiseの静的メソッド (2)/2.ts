import { readFile } from "fs/promises";

// Promise.all に直接 readFile の呼び出しを渡す
// → 各ファイルを並列で読み込み、すべて完了したら then に進む
const p = Promise.all([
    readFile("foo.txt", "utf8"), // foo.txt を読み込む
    readFile("bar.txt", "utf8"), // bar.txt を読み込む
    readFile("baz.txt", "utf8")  // baz.txt を読み込む
]);

// 読み込み成功時の処理
p.then((results) => {
    // 分割代入で配列を展開
    const [foo, bar, baz] = results;

    // それぞれのファイル内容を出力
    console.log("foo.txt:", foo);
    console.log("bar.txt:", bar);
    console.log("baz.txt:", baz);
});