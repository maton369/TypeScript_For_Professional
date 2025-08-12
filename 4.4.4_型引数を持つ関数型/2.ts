// ジェネリック関数型 Func の定義
// T は呼び出し時に推論される型パラメータ
// 引数 arg: T と num: number を受け取り、T 型要素を持つ配列 T[] を返す
type Func = <T>(arg: T, num: number) => T[];

// Func 型の変数 repeat に関数式を代入
const repeat: Func = (element, length) => {
    const result = []; // ここでは型推論により T[] 型になる
    for (let i = 0; i < length; i++) {
        result.push(element); // T 型の要素を追加
    }
    return result; // T[] を返す
};

// 使用例: string 型
console.log(repeat("a", 5));
// ["a", "a", "a", "a", "a"]

// 使用例: number 型
console.log(repeat(42, 3));
// [42, 42, 42]

// 使用例: オブジェクト型
console.log(repeat({ name: "uhyo" }, 2));
// [{ name: "uhyo" }, { name: "uhyo" }]