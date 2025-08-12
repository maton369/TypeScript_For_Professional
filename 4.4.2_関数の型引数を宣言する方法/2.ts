// ジェネリック関数 repeat の定義
// <T> は任意の型を表す型パラメータ
// element: T ... 繰り返す要素（型は T）
// length: number ... 繰り返す回数
// 戻り値は T 型の配列
const repeat = <T>(element: T, length: number): T[] => {
    // 結果を格納する配列
    const result: T[] = [];

    // length 回だけ element を配列に追加する
    for (let i = 0; i < length; i++) {
        result.push(element);
    }

    // 繰り返し要素が入った配列を返す
    return result;
};

// 使用例
console.log(repeat<string>("a", 5));
// => ["a", "a", "a", "a", "a"]

console.log(repeat<number>(123, 3));
// => [123, 123, 123]

console.log(repeat<boolean>(true, 4));
// => [true, true, true, true]