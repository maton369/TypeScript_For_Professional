// fs/promises モジュールから readFile をインポート
// → Promise ベースの非同期ファイル読み込みが可能になる
import { readFile } from "fs/promises";

// foo.txt を UTF-8 エンコードで非同期に読み込む
// 戻り値は Promise<string>
const p = readFile("foo.txt", "utf8");

// then: 成功時の処理
p.then((result) => {
    console.log("成功", result);
});

// catch: 失敗時の処理（例外が発生した場合に呼ばれる）
p.catch((error) => {
    console.log("失敗", error);
});

// finally: 成功/失敗に関わらず必ず最後に実行される処理
p.finally(() => {
    console.log("終わりました");
});