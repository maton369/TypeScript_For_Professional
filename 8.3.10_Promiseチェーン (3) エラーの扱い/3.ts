import { readFile } from "fs/promises";

/**
 * このコードは Promise チェーンにおける「失敗伝播」の基本例である。
 */

const p = readFile("foo.txt", "utf8")
    // 1) foo.txt の読み込みが成功したら、sleepReject(1000) を返す
    //    → sleepReject は 1 秒後に必ず reject する Promise
    .then(() => sleepReject(1000))
    // 2) ここで then をつけているが、直前の Promise が reject するため
    //    この「成功時コールバック(result)」は呼ばれない。
    .then((result) => {
        // この行は到達しない（`result` も得られない）
        console.log(result);
    });

/**
 * 補足解説:
 * - `sleepReject` が返した Promise は必ず reject するため、
 *   このチェーン全体 (p) の状態も reject で終了する。
 * - `then` の第 1 引数は「成功時ハンドラ」なので呼ばれない。
 * - このままではエラーが処理されず、UnhandledPromiseRejectionWarning が出る。
 *   → エラー処理をするなら以下のように `.catch(...)` をつける必要がある。
 *
 *   p.catch(() => {
 *     console.log("失敗しました");
 *   });
 *
 * - あるいは then に第 2 引数を渡しても良い:
 *
 *   .then(
 *     (result) => console.log(result),
 *     () => console.log("失敗しました")
 *   );
 *
 * - まとめると:
 *   - `then` の中で新しい Promise を返すと、その状態（成功 or 失敗）が
 *     次のチェーンに引き継がれる。
 *   - 今回は「常に失敗する Promise」を返しているため、次の then には
 *     成功時ハンドラが呼ばれず、失敗として扱われる。
 */