import { readFile } from "fs/promises";

/**
 * このコードは Promise チェーンにおけるエラー処理の正しい使い方の例である。
 */

const p2 = readFile("foo.txt", "utf8")
    // 1) ファイルが正常に読み込めた場合、
    //    さらに sleepReject(1000) を呼び出して 1 秒後に reject する Promise を返す。
    .then(() => sleepReject(1000))
    // 2) 前の Promise が成功すればここが呼ばれるが、今回は reject するので実行されない。
    .then((result) => {
        console.log(result); // 到達しない
    })
    // 3) どこかで reject が発生した場合、この catch に処理が流れてくる。
    .catch((err) => {
        console.log("エラーが発生しました！！！！", err);
    });

/**
 * 補足解説:
 *
 * - `.then(...).catch(...)` の形を使うと、チェーン内で発生したあらゆるエラーをまとめて捕捉できる。
 * - ここで発生しうるエラーは大きく2種類:
 *   1. `readFile("foo.txt", "utf8")` が失敗した場合 (ファイルが存在しない、権限がない等)
 *   2. `sleepReject(1000)` による明示的な reject
 * - これらはいずれも `catch` に流れ、`err` にはそれぞれのエラーオブジェクトが渡される。
 * - もしエラーをさらに上位に伝搬させたければ、`catch` 内で再び `throw` すれば良い。
 *
 * まとめ:
 * - `.catch(...)` はチェーンの末尾に置いておくのが基本。
 * - そうすることで「どこで失敗しても最後に必ず拾える」というパターンを作れる。
 */