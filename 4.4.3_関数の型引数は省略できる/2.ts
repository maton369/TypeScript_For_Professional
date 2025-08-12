// この書き方はジェネリックではなく、型パラメータ名に "string" を使ってしまっているため混乱を招く。
// つまり以下は「型パラメータ string（文字列型ではない）」を宣言しているだけであり、
// JavaScript の string 型とは無関係である。
// 正しくはジェネリックを使わず、単純に string 型を引数と戻り値に指定する形になる。

// 文字列 element を length 回繰り返して配列にする関数
function repeat(element: string, length: number): string[] {
    const result: string[] = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
}

// 例: "a" を5回繰り返す
console.log(repeat("a", 5)); // ["a", "a", "a", "a", "a"]