// ジェネリック関数 repeat<T> の定義
// T は引数 element と返り値配列の要素型を表す型パラメータ
function repeat<T>(element: T, length: number): T[] {
    // 結果を格納する配列。要素型は T。
    const result: T[] = [];
    // length 回ループして、element を配列に追加する
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    // 完成した配列を返す
    return result;
}

// 使用例1: T を string 型として使用
// ["a", "a", "a", "a", "a"] が表示される
console.log(repeat<string>("a", 5));

// 使用例2: T を number 型として使用
// [123, 123, 123] が表示される
console.log(repeat<number>(123, 3));