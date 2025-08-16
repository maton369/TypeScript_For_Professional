// fs/promises モジュールから readFile 関数をインポート
// → Promise ベースでファイルを非同期に読み込むことが可能になる
import { readFile } from "fs/promises";

// foo.txt を UTF-8 エンコードで非同期に読み込み
// 戻り値は Promise<string> となる
const p = readFile("foo.txt", "utf8");

// then メソッドに2つのコールバックを渡している
// 第1引数: 成功時に実行される処理
// 第2引数: 失敗時に実行される処理
p.then((result) => {
    // ファイルの内容が正常に読み込まれた場合に実行
    console.log("成功", result);
}, (error: unknown) => {
    // 読み込み中にエラーが発生した場合に実行
    // error は型が不明なため、型注釈として unknown を明示
    console.log("失敗", error);
});