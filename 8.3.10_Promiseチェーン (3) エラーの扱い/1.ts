import { readFile } from "fs/promises";

const p1 = readFile("foo.txt", "utf8");   // ① foo.txt を読む Promise<string>

const p2 = p1.then((result) => {          // ② 読み込み成功時にコールバック
    throw new Error("Error!!!!");           // ③ ここで例外を投げる
});

p2.then((result) => {                     // ④ その後の then
    console.log(result);
});