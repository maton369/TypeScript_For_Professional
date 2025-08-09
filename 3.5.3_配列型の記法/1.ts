// ✅ これはOK
// number[] 型の配列に数値を格納
const arr: number[] = [1, 10, 100];

// ❌ これはコンパイルエラー
// string[] 型の配列に数値を入れようとしているため型が不一致
// エラー内容: Type 'number' is not assignable to type 'string'.
const arr2: string[] = [123, -456];