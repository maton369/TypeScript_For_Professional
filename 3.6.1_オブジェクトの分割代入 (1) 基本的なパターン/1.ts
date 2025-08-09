// 分割代入の例
// obj というオブジェクトから foo プロパティと bar プロパティを取り出す
const { foo, bar } = obj;

/*
  この書き方は
  const foo = obj.foo;
  const bar = obj.bar;
  と同じ意味である。
*/

// 例:
const obj = { foo: 123, bar: "Hello" };
const { foo, bar } = obj;

console.log(foo); // 123 と表示される
console.log(bar); // "Hello" と表示される