// `greeting` は文字列リテラル "Hello, " を保持する定数であり、型は明示的に `string` と指定されている。
const greeting: string = "Hello, "

// ❌ `target` は数値 `123` を代入しているにもかかわらず、型注釈が `string` になっているため、型エラーが発生する。
// TypeScript は代入される値が `number` であることを検出し、エラーを報告する。
const target: string = 123;

// この行は `greeting + target` を文字列連結として実行しようとしているが、
// 上記の型エラーによりコンパイルされない。
console.log(greeting + target);