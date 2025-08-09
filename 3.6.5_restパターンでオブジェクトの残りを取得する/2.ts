// 元のオブジェクト
const obj = {
    foo: 123,
    bar: "string",
    baz: false,
};

// 分割代入で foo プロパティを取り出し、残りのプロパティを restObj にまとめる
const { foo, ...restObj } = obj;

console.log(foo); // 123 が表示される（foo の値）
console.log(restObj); // { bar: "string", baz: false } が表示される（foo 以外のプロパティがまとめられる）