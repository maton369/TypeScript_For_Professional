import { readFile } from "fs/promises";

/**
 * このコードは、Promise の基本的な成功処理と失敗処理を
 * `then` と `catch` を分けて書いた例である。
 */

const p = readFile("foo.txt", "utf8");

// 成功した場合の処理
p.then((result) => {
    console.log("成功", result);
});

// 失敗した場合の処理
p.catch((error) => {
    console.log("失敗", error);
});

/**
 * 補足解説:
 *
 * - `readFile("foo.txt", "utf8")` はファイルを非同期に読み込む Promise を返す。
 *   - 読み込みに成功した場合はファイル内容（文字列）が `result` に渡される。
 *   - 読み込みに失敗した場合（ファイルが存在しない、権限がないなど）は `catch` 側にエラーが渡される。
 *
 * - `then` と `catch` を個別に呼び出しても問題はない。
 *   実際には以下と同じ意味になる:
 *
 *   ```ts
 *   readFile("foo.txt", "utf8")
 *     .then((result) => {
 *       console.log("成功", result);
 *     })
 *     .catch((error) => {
 *       console.log("失敗", error);
 *     });
 *   ```
 *
 * - `p.then(...).catch(...)` と `p.then(...); p.catch(...)` の違い:
 *   - 前者は「同じチェーン」でエラーを捕捉する。
 *   - 後者は `p` そのものに `then` と `catch` を登録しているので挙動はほぼ同じ。
 *   - 実際には、どちらも `p` が reject された場合に `catch` が呼ばれる。
 *
 * - 一般的にはチェーン形式 (`.then(...).catch(...)`) をよく使うが、
 *   上記のように分けて書くことも可能である。
 */