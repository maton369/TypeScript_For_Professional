// 関数型 GetTimeFunc を定義
// - 引数なし
// - Date オブジェクトを返す
type GetTimeFunc = () => Date;

function useTime(getTimeFunc: GetTimeFunc | undefined) {
    // オプショナルチェーン ?. により getTimeFunc が undefined でなければ呼び出す
    // - getTimeFunc が undefined の場合 → 全体は undefined になる
    // - getTimeFunc が関数の場合 → Date オブジェクトが返る
    // その後 toString() を呼び出して string に変換する
    // したがって最終的な型は string | undefined となる
    const timeStringOrUndefined = getTimeFunc?.().toString();
}