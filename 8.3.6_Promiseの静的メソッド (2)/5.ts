import { readFile } from "fs/promises";

// 指定時間後に reject する Promise を返す関数
const sleepReject = (duration: number) => {
    return new Promise<never>((resolve, reject) => {
        setTimeout(reject, duration);
    })
};

// foo.txt 読み込み vs 5秒タイムアウト の競争
const p = Promise.race([
    readFile("foo.txt", "utf8"),
    sleepReject(5000)
]);

// 結果のハンドリング
p.then((result) => {
    console.log("成功", result);
}, (error: unknown) => {
    console.log("失敗", error);
});