import { readFile } from "fs/promises";

// foo.txt, bar.txt, baz.txt を並列的に非同期で読み込む
const pFoo = readFile("foo.txt", "utf8"); // foo.txt を読み込む Promise
const pBar = readFile("bar.txt", "utf8"); // bar.txt を読み込む Promise
const pBaz = readFile("baz.txt", "utf8"); // baz.txt を読み込む Promise

// Promise.all で全ての読み込み完了を待つ
// → 3つの Promise がすべて resolve したときに、配列 results としてまとめられる
// → どれか一つでも reject されたら全体が reject される点に注意
const p = Promise.all([pFoo, pBar, pBaz]);

// 全部読み込めたら結果を表示する
p.then((results) => {
    // results[0] が foo.txt の内容
    console.log("foo.txt:", results[0]);
    // results[1] が bar.txt の内容
    console.log("bar.txt:", results[1]);
    // results[2] が baz.txt の内容
    console.log("baz.txt:", results[2]);
});