import { readFile } from "fs/promises";

const sleepReject = (duration: number) => {
    return new Promise<never>((resolve, reject) => {
        setTimeout(reject, duration); // duration後にreject。ただし理由はundefined
    })
};

const p = Promise.allSettled([
    readFile("foo.txt", "utf8"), // ファイル読み込み
    sleepReject(5000)            // 5秒後にreject
]);

p.then((result) => {
    console.log(result);
});