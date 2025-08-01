// "apple" と "orange" を辞書順（Unicodeの文字コード順）で比較
// "a" の文字コード（U+0061 = 97）は "o"（U+006F = 111）よりも小さいため、true になる
console.log("apple" < "orange"); // true が表示される