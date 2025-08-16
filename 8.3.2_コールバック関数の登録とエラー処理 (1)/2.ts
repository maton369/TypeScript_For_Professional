// fs/promises モジュールから readFile 関数をインポート
// → Promise ベースでファイル読み込みができる
import { readFile } from "fs/promises";

// foo.txt を UTF-8 形式で非同期に読み込む
// readFile は Promise を返すので、p には Promise オブジェクトが代入される
const p = readFile("foo.txt", "utf8");

// ファイル読み込みが成功した場合に実行される処理
// result には読み込んだファイルの内容が文字列として渡される
p.then((result) => {
    console.log("成功", result);
});

// ファイル読み込みが失敗した場合に実行される処理
// error にはエラーの詳細情報が渡される
p.catch((error) => {
    console.log("失敗", error);
});