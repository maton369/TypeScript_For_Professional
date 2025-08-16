import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ① 現在のモジュールの URL (例: file:///Users/.../main.mjs) をパス文字列に変換
const filePath = fileURLToPath(import.meta.url);

// ② ファイルのディレクトリを取得
const fileDir = path.dirname(filePath);

// ③ 読み込みたいファイルの相対パスを結合して絶対パスを生成
const dataFile = path.join(fileDir, "../uhyo.txt");

// ④ ファイルをUTF-8で読み込む
const data = readFileSync(dataFile, { encoding: "utf8" });