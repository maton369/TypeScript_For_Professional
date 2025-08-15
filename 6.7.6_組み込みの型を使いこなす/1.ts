// Readonly<...> はユーティリティ型であり、
// 渡されたオブジェクト型のすべてのプロパティを readonly（読み取り専用）に変換するである。
type T = Readonly<{
    name: string; // 本来は変更可能な string 型プロパティ
    age: number;  // 本来は変更可能な number 型プロパティ
}>;

// 上記により、T は次の展開形と等価になるである。
// {
//   readonly name: string;
//   readonly age: number;
// }