// obj1というオブジェクトを定義（barとbazという2つのプロパティを持つ）
const obj1 = {
    bar: 456,
    baz: 789
};

// obj2というオブジェクトを定義
// obj1のプロパティをスプレッド構文（...）で展開して追加
const obj2 = {
    foo: 123,   // 新たなプロパティfooを定義
    ...obj1     // obj1のプロパティを展開して追加（bar: 456, baz: 789）
};

// obj2は { foo: 123, bar: 456, baz: 789 } となる
console.log(obj2);