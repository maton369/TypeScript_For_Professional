// 戻り値の型は「テンプレートリテラル型」`Hello, ${string}!` である。
// すなわち「先頭が 'Hello, '、末尾が '!'、その間は任意の文字列」というパターンだけを許容するである。
function getHelloStr(): `Hello, ${string}!` {
    const rand = Math.random();

    if (rand < 0.3) {
        // ✅ "Hello, " で始まり "!" で終わるためパターンに一致する
        return "Hello, world!";
    } else if (rand < 0.6) {
        // ✅ これも同様に一致する
        return "Hello, my world!";
    } else if (rand < 0.9) {
        // ❌ エラー: 末尾が "!" ではなく "." のため、`Hello, ${string}!` に一致しないである
        // return "Hello, world.";

        // → 修正例（末尾を "!" にする）
        return "Hello, world!";
    } else {
        // ❌ エラー: 先頭が "Hello, " ではなく "Hell, " のため、パターンに一致しないである
        // return "Hell, world!";

        // → 修正例（先頭を "Hello, " にする）
        return "Hello, world!";
    }
}