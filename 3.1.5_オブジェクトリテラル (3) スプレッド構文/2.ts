// obj1というオブジェクトを定義（3つのプロパティを持つ）
const obj1 = {
    foo: 123,
    bar: 456,
    baz: 789
};

// obj2を定義
// obj1のすべてのプロパティをスプレッド構文で展開し、最後にfooを上書き
const obj2 = {
    ...obj1,      // obj1の内容（foo: 123, bar: 456, baz: 789）を展開
    foo: -9999,   // 展開されたfooを上書き（123 → -9999）
};

// obj2の中身は { foo: -9999, bar: 456, baz: 789 }
console.log(obj2);