// fs/promises モジュールから readFile 関数をインポート
// → Promise ベースでファイル読み込みが可能になる
import { readFile } from "fs/promises";

// foo.txt を UTF-8 形式で非同期に読み込み、Promise オブジェクトを返す
const p = readFile("foo.txt", "utf8");

// then メソッドの第1引数に「成功時の処理」、第2引数に「失敗時の処理」を指定
// - result: 読み込んだファイル内容（文字列）
// - error: 読み込みエラーが発生した場合のエラーオブジェクト
p.then((result) => {
    console.log("成功", result);
}, (error) => {
    console.log("失敗", error);
});