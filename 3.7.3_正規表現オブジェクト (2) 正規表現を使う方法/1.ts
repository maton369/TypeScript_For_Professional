// replace(正規表現, 置換文字列) は、正規表現にマッチした部分を指定した文字列に置き換える

// /ab+c/ は「a の後に b が1回以上続くパターン」にマッチ
// この場合、g フラグなしなので最初にマッチした部分（"abbbbbbbc"）だけが置き換わる
// 結果: "Hello, foobar world! abbc"
console.log("Hello, abbbbbbbc world! abbc".replace(/ab+c/, "foobar"));

// /ab+c/g は g（global）フラグ付きで、文字列全体でマッチするすべての部分を置き換える
// 最初の "abbbbbbbc" と後半の "abbc" の両方が "foobar" に置換される
// 結果: "Hello, foobar world! foobar"
console.log("Hello, abbbbbbbc world! abbc".replace(/ab+c/g, "foobar"));