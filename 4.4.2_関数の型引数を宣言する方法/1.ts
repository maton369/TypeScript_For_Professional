// ジェネリック関数 repeat の定義
// 型パラメータ <T> により、任意の型の要素を繰り返し配列として返せる
const repeat = function <T>(element: T, length: number): T[] {
    // 結果を格納する配列。要素型は T 型
    const result: T[] = [];

    // length 回だけ element を配列に追加する
    for (let i = 0; i < length; i++) {
        result.push(element);
    }

    // T 型の配列を返す
    return result;
};

// 使用例
// 明示的に型パラメータを指定（T = string）
console.log(repeat<string>("a", 5));
// => ["a", "a", "a", "a", "a"]

// 明示的に型パラメータを指定（T = number）
console.log(repeat<number>(123, 3));
// => [123, 123, 123]

// 型推論により自動で T が boolean 型と判定される
console.log(repeat(true, 4));
// => [true, true, true, true]