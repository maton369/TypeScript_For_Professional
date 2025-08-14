// User型: 「成人判定メソッド isAdult を持つ」ことを型で保証しているである
type User = {
    isAdult(): boolean;
}

function checkForAdultUser(user: User | null) {
    // オプショナルチェーン ?. により user が null でなければ isAdult() を呼び出すである
    // - user が null の場合 → 全体の評価結果は undefined となる
    // - user が非nullの場合 → isAdult() の返り値（true/false）になる
    // ここでは if 文で使用しているため、true の場合のみブロックが実行される
    if (user?.isAdult()) {
        // 成人ユーザーにだけ特別なコンテンツを表示する関数を呼び出すである
        showSpecialContents(user);
    }
}