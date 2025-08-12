// ジェネリック関数 repeat の定義
// 型引数 T は呼び出し時に推論され、element の型になる
// element: T を length 回繰り返した配列（T[]）を返す
function repeat<T>(element: T, length: number): T[] {
    const result: T[] = []; // 結果を格納する配列（要素型は T）
    for (let i = 0; i < length; i++) {
        result.push(element); // 同じ値を length 回追加
    }
    return result; // T[] 型の配列を返す
}

// 呼び出し時に element が "a"（string型）なので、T は string と推論される
// よって、result は string[] 型となる
const result = repeat("a", 5);

console.log(result); // ["a", "a", "a", "a", "a"] が表示される