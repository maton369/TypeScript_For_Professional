// 文字列を小文字または大文字に変換する関数
// 第2引数 upper が true の場合は大文字に、false または未指定の場合は小文字にする
const toLowerOrUpper = (str: string, upper?: boolean): string => {
    if (upper) {
        // upper が true → 大文字に変換
        return str.toUpperCase();
    } else {
        // upper が false または undefined → 小文字に変換
        return str.toLowerCase();
    }
};

// 第2引数なし → 小文字化
console.log(toLowerOrUpper("Hello"));        // "hello" と表示される
// 第2引数 false → 小文字化
console.log(toLowerOrUpper("Hello", false)); // "hello" と表示される
// 第2引数 true → 大文字化
console.log(toLowerOrUpper("Hello", true));  // "HELLO" と表示される