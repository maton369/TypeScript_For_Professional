// ジェネリック関数 repeat の定義
// T は任意の型を表す型パラメータ
const repeat = function <T>(element: T, length: number): T[] {
    // この変数 result は repeat 関数内だけで有効（関数スコープ）
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
        result.push(element); // T 型の要素を配列に追加
    }
    return result; // 最終的に T[] を返す
};

// 関数の外には変数 result は存在しないため、以下はコンパイルエラーになる
// エラー: Cannot find name 'result'.
console.log(result);

// 正しい使い方（関数の戻り値を変数に受け取る）
const arr = repeat("a", 5);
console.log(arr); // ["a", "a", "a", "a", "a"]