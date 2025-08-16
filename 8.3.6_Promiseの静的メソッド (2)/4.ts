import { readFile } from "fs/promises";

// Promise.race を使って複数の Promise のうち
// 「最初に完了したものだけ」を結果として返す
const p = Promise.race([
    readFile("foo.txt", "utf8"), // foo.txt の読み込み
    readFile("bar.txt", "utf8"), // bar.txt の読み込み
    readFile("baz.txt", "utf8"), // baz.txt の読み込み
]);

// 最初に成功または失敗した Promise の結果が渡される
p.then((result) => {
    console.log(result);
});