// 正規表現 /a(b+)c/g の意味:
//   a        → 'a' という文字
//   (b+)     → 'b' が1回以上連続する部分（キャプチャグループ）
//   c        → 'c' という文字
//   g        → グローバルフラグ（文字列全体からすべての一致を取得）
//
// match() を g フラグ付きで使うと、キャプチャグループの情報は返らず、
// 一致した文字列全体だけを配列として返す。
const result = "Hello, abbbbbbc world! abc".match(/a(b+)c/g);

console.log(result); // ["abbbbbbc", "abc"] と表示される