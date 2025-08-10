// match(正規表現) は、マッチした結果を配列として返す（マッチしなければ null）
// 正規表現 /a(b+)c/ の意味:
//   a      → 'a' という文字
//   (b+)   → 'b' が1回以上連続する部分をキャプチャ（丸括弧で囲まれた部分）
//   c      → 'c' という文字
const result = "Hello, abbbbbbc world! abc".match(/a(b+)c/);

if (result !== null) {
    // result[0] は正規表現全体にマッチした文字列 → "abbbbbbc"
    console.log(result[0]); // "abbbbbbc" と表示される

    // result[1] はキャプチャグループ (b+) にマッチした部分 → "bbbbbb"
    console.log(result[1]); // "bbbbbb" と表示される
}