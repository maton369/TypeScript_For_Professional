// 第2引数 "upper" はデフォルト値 false を持つため、引数を省略すると false になる
const toLowerOrUpper = (str: string, upper: boolean = false): string => {
    if (upper) {
        // upper が true の場合は大文字変換
        return str.toUpperCase();
    } else {
        // upper が false の場合は小文字変換
        return str.toLowerCase();
    }
}

// 第2引数を省略 → デフォルト値 false が適用され小文字変換
console.log(toLowerOrUpper("Hello"));        // "hello" と表示される
// 明示的に false を指定 → 小文字変換
console.log(toLowerOrUpper("Hello", false)); // "hello" と表示される
// 明示的に true を指定 → 大文字変換
console.log(toLowerOrUpper("Hello", true));  // "HELLO" と表示される