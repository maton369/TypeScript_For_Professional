// /^abc/ は、文字列の先頭 (^) が "abc" で始まる場合にマッチする正規表現
const r = /^abc/;

// "abcdefg" は先頭が "abc" なのでマッチ → true
console.log(r.test("abcdefg")); // true と表示される

// "Hello, abcdefg" は "abc" が途中にあるが、先頭ではないためマッチしない → false
console.log(r.test("Hello, abcdefg")); // false と表示される