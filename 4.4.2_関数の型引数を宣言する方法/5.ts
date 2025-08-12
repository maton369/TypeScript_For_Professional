// ジェネリック関数 repeat（制約付き）である。
// 型引数 T は { name: string } を必ず含む型でなければならない（extends で制約）。
// element: T を length 回繰り返した配列（T[]）を返す。
const repeat = <T extends { name: string }>(
    element: T,
    length: number
): T[] => {
    const result: T[] = []; // 返却用のT型配列である。
    for (let i = 0; i < length; i++) {
        result.push(element); // 同じ参照/値を length 回追加する（シャローコピーである点に注意）。
    }
    return result;
};

// { name: string } を満たす具体型を定義
type HasNameAndAge = {
    name: string;
    age: number;
};

// ✅ これはOK（HasNameAndAge は name: string を含むため、制約を満たす）
// 出力例：同じオブジェクトが3回繰り返された配列が表示される。
console.log(
    repeat<HasNameAndAge>(
        {
            name: "uhyo",
            age: 26,
        },
        3
    )
);

// ❌ これはコンパイルエラーである。
// 理由：string 型は { name: string } を満たさないため、T の制約に違反する。
// エラー: Type 'string' does not satisfy the constraint '{ name: string; }'.
console.log(repeat<string>("a", 5));