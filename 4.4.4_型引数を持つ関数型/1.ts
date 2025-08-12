// ジェネリック関数 repeat
// 任意の型 T の値 element を length 回繰り返して配列に格納して返す
// T は関数呼び出し時に推論されるため、文字列・数値・オブジェクトなどあらゆる型に対応可能
const repeat = function <T>(element: T, length: number): T[] {
    const result: T[] = []; // T 型の要素を持つ配列
    for (let i = 0; i < length; i++) {
        result.push(element); // 同じ要素を length 回追加
    }
    return result; // T[] を返す
};

// 使用例: string 型
console.log(repeat("a", 5));
// ["a", "a", "a", "a", "a"]

// 使用例: number 型
console.log(repeat(123, 3));
// [123, 123, 123]

// 使用例: オブジェクト型
console.log(repeat({ name: "uhyo" }, 2));
// [{ name: "uhyo" }, { name: "uhyo" }]