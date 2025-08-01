// foo という変数を string 型として宣言し、"文字列" を代入
let foo: string = "文字列";

// エラー: number 型の値 123 を string 型の変数 foo に代入しようとしているため
foo = 123;
// ↑ TypeScript の型チェックにより、以下のようなエラーが発生する：
// エラー: Type 'number' is not assignable to type 'string'.
// （数値型は文字列型に代入できない）