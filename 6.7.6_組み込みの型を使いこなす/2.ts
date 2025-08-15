// Partial<...> はユーティリティ型であり、
// 渡されたオブジェクト型のすべてのプロパティをオプショナル（?）に変換するである。
type T = Partial<{
    name: string; // 本来は必須の string 型プロパティ
    age: number;  // 本来は必須の number 型プロパティ
}>;

// 上記により、T は次の展開形と等価になるである。
// {
//   name?: string | undefined;
//   age?: number | undefined;
// }