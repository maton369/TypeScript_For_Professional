// fs モジュールから readFileSync 関数をインポート
import { readFileSync } from "fs";

// ファイル "uhyo.txt" を同期的に読み込み、文字列として格納
const data = readFileSync("uhyo.txt", { encoding: "utf8" });

// "uhyo" の出現回数をカウントする変数
let count = 0;

// 現在の検索開始位置
let currentIndex = 0;

// 無限ループで検索を繰り返す
while (true) {
    // "uhyo" が次に出現するインデックスを探す
    const nextIndex = data.indexOf("uhyo", currentIndex);

    if (nextIndex >= 0) {
        // 出現が見つかった場合、カウントを増加
        count++;

        // 次の検索は、今回見つけた位置の直後から開始
        currentIndex = nextIndex + 1;
    } else {
        // 出現が見つからなければループ終了
        break;
    }
}

// 最終的なカウントを出力
console.log(count);