// サンプルのオブジェクト
const obj = {
    foo: 123,
    bar: "Hello",
    "foo bar": "スペース入りキー"
};

// 分割代入の例
const {
    foo,             // obj.foo の値を変数 foo に代入
    bar: barVar,     // obj.bar の値を変数 barVar に代入（プロパティ名と変数名を変える例）
    "foo bar": fooBar // obj["foo bar"] の値を変数 fooBar に代入（スペースを含むキー）
} = obj;

console.log(foo);     // 123
console.log(barVar);  // "Hello"
console.log(fooBar);  // "スペース入りキー"