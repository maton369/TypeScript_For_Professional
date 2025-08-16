// ※前提: Node.js の fs/promises から readFile を使用する場合は以下のインポートが必要である。
// import { readFile } from "fs/promises";

/**
 * 指定ミリ秒後に必ず reject する Promise を返す関数である。
 * resolve は使用しないため未使用引数でも良いが、意図を明確化するために両方受け取っている。
 * この関数をレース/連結に用いることで「タイムアウト」を表現できる。
 */
const sleepReject = (duration: number) => {
    return new Promise<never>((resolve, reject) => {
        setTimeout(reject, duration); // duration 経過後に失敗（reject）させる
    })
};

/**
 * 処理の流れ:
 * 1) foo.txt を UTF-8 で非同期読み込みする。
 * 2) 読み込みが成功したら then の中で 1 秒後に reject される Promise を返す。
 *    → ここで返した Promise の状態がそのまま次の then に伝播する（この場合は 1 秒後に失敗）。
 * 3) 次の then は「成功時ハンドラ（第1引数）」と「失敗時ハンドラ（第2引数）」の二つを指定している。
 *    今回は 2) で必ず reject されるため、第2引数の失敗時ハンドラが呼ばれる。
 */
const p = readFile("foo.txt", "utf8")
    .then(() => sleepReject(1000)) // 読み込み成功後、1 秒後に必ず失敗する Promise を返す
    .then(
        (result) => {
            // ここは成功時にのみ実行されるが、直前が必ず reject するため通常は到達しない。
            // コンパイル上は result の型は unknown 相当になり得るが、ここでは使わない。
            console.log(result);
        },
        () => {
            // 直前が reject した場合に実行される（今回は 1 秒後にここが呼ばれる想定である）
            console.log("失敗しました");
        }
    );

/**
 * 補足:
 * - then のコールバック内で Promise を「返す」と、返した Promise の settle（成功/失敗）が
 *   そのまま現在のチェーンの結果になる（Promise 連結の基本挙動である）。
 * - 明示的に .catch(...) を後段に置く書き方でも同じくエラーを処理できる。
 * - sleepReject の reject 理由は undefined になるため、理由を明示したい場合は
 *   setTimeout(() => reject(new Error("タイムアウト")), duration) のように書くと良い。
 */