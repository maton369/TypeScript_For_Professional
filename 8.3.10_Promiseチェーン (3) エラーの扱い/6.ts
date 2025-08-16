import { readFile } from "fs/promises";

/**
 * このコードは Promise を複数の変数に分けて
 * 成功時・失敗時の処理を登録する例である。
 */

const p = readFile("foo.txt", "utf8");

// `then` による成功処理を登録
const p2 = p.then((result) => {
    console.log("成功", result);
});

// `catch` による失敗処理を登録
const p3 = p.catch((error) => {
    console.log("失敗", error);
});

/**
 * 補足解説:
 *
 * - `p` はファイル読み込みの結果を表す Promise。
 *   - 成功すればファイル内容の文字列を解決する。
 *   - 失敗すればエラーで reject される。
 *
 * - `p2` は `p.then(...)` の戻り値で、これは **新しい Promise** である。
 *   - この Promise は `then` のコールバックの戻り値を解決する。
 *   - ここでは `console.log(...)` の戻り値（`undefined`）を返すので、`p2` は `undefined` を解決する Promise。
 *
 * - `p3` も同様に `catch` の戻り値で、新しい Promise。
 *   - この Promise は `catch` のコールバックの戻り値（`undefined`）を解決する。
 *
 * - 結果として:
 *   - 成功した場合: `p2` の `then` が実行される。
 *   - 失敗した場合: `p3` の `catch` が実行される。
 *
 * - `p.then(...).catch(...)` と異なり、この書き方だと
 *   `p2` は「成功処理のみ」、`p3` は「失敗処理のみ」を担当する形になる。
 *
 * - つまり **成功と失敗を別々の Promise に分けた** 書き方といえる。
 */