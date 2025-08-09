// ネスト（入れ子）されたオブジェクト
const nested = {
    num: 123, // 数値型プロパティ
    obj: {    // オブジェクト型プロパティ
        foo: "hello", // 文字列型プロパティ
        bar: "world"  // 文字列型プロパティ
    }
};

// --- 直接アクセスする場合 ---
console.log(nested.num);      // 123 が表示される
console.log(nested.obj.foo);  // "hello" が表示される
console.log(nested.obj.bar);  // "world" が表示される

// --- ネストの分割代入 ---
// objプロパティを展開し、その中のfooとbarを直接変数として取得する
const { num, obj: { foo, bar } } = nested;
console.log(num); // 123 が表示される
console.log(foo); // "hello" が表示される
console.log(bar); // "world" が表示される