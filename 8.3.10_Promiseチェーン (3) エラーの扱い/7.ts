import { readFile } from "fs/promises";

/**
 * ファイル読み込みの Promise を作成
 */
const p = readFile("foo.txt", "utf8");

/**
 * まず成功時の処理を登録
 * - p2 は「成功時に console.log を実行し、戻り値 undefined を解決する Promise」
 */
const p2 = p.then((result) => {
    console.log("成功", result);
});

/**
 * そのあとに p2 に対して catch を繋げる
 * - p3 は「p2 がエラーになった場合のみ実行される Promise」
 * - p.then(...).catch(...) と同じ動作ではなく、
 *   「成功ハンドラの中で例外が出た場合」もここで拾える
 */
const p3 = p2.catch((error) => {
    console.log("失敗", error);
});