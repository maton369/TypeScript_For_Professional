// 関数makeKeyは、与えられたuserName文字列を使って "user:◯◯" というキーを生成する
// Tはstringのサブタイプ（リテラル型を含む）であるため、呼び出し時の文字列がリテラルなら
// 戻り値の型も "user:その文字列" というリテラル型として推論される
function makeKey<T extends string>(userName: T) {
    // `as const` により、戻り値がワイド化(string型)せずにリテラル型として保持される
    return `user:${userName}` as const;
}

// 呼び出し時に "uhyo" は string 型ではなくリテラル型 "uhyo" として推論されるため
// makeKey("uhyo") の戻り値は "user:uhyo" 型になる
const uhyoKey: "user:uhyo" = makeKey("uhyo");