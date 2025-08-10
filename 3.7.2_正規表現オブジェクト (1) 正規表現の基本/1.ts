// /ab+c/ は、文字列の中に
// 「a の後に 1 回以上の b が続き、その後に c が続く」パターンを探す正規表現
const r = /ab+c/;

// "abbbbc" は a の後に b が4回、そして c が来るためマッチ → true
console.log(r.test("abbbbc")); // true と表示される

// "Hello, abc world!" は abc 部分がパターンにマッチするため → true
console.log(r.test("Hello, abc world!")); // true と表示される

// "ABC" は大文字のため、小文字パターン /ab+c/ とはマッチせず → false
console.log(r.test("ABC")); // false と表示される

// "こんにちは" は a, b, c を含まないため → false
console.log(r.test("こんにちは")); // false と表示される