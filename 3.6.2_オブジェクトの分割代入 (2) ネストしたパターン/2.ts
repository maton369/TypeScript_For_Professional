// nestedオブジェクトの定義（ネスト構造を持つ）
const nested = {
    num: 123, // 数値型のプロパティ
    obj: {
        foo: "hello", // 文字列型プロパティ
        bar: "world"  // 文字列型プロパティ
    }
};

// 分割代入で、nested.num を num に、nested.obj.foo を foo に代入
// obj自体は変数として取り出していない（中の foo のみ取得）
const { num, obj: { foo } } = nested;

console.log(num); // 123 と表示される（nested.num の値）
console.log(foo); // "hello" と表示される（nested.obj.foo の値）