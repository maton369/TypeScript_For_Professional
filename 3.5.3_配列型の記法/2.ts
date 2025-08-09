// ✅ 簡単な型の配列
// boolean型だけを要素として持つ配列
const arr1: boolean[] = [false, true];

// ✅ 複雑な型の配列
// Array<...> の形式を使い、要素が { name: string } 型のオブジェクトであることを指定
const arr2: Array<{
    name: string; // name プロパティは文字列型
}> = [
        { name: "山田さん" },
        { name: "田中さん" },
        { name: "鈴木さん" }
    ];