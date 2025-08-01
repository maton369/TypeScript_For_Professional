// `greeting` は "Hello, " という文字列を保持する定数。
// 型注釈はないが、TypeScript によって `string` 型として推論される。
const greeting = "Hello, ";

// `target` に `greeting` を代入しているため、
// `target` も "Hello, " という値を持つことになる。
// 型も同様に `string` 型に推論される。
const target = greeting;

// `greeting + target` は "Hello, " + "Hello, " となるため、
// 出力は "Hello, Hello," となる。
console.log(greeting + target);