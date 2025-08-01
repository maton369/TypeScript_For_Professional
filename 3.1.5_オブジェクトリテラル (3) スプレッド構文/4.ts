// obj1 には foo:123, bar:456 が含まれている
const obj1 = {
    foo: 123,
    bar: 456,
};

// obj2 には bar:-999, baz:-9999 が含まれている
const obj2 = {
    bar: -999,
    baz: -9999,
};

// obj3 を作成：obj1 を展開（スプレッド）して、さらに obj2 を展開
// このとき obj2 の bar が obj1 の bar を上書きする
const obj3 = {
    ...obj1, // { foo: 123, bar: 456 }
    ...obj2  // bar が上書きされ、baz が追加される
};

// 結果として obj3 は { foo: 123, bar: -999, baz: -9999 } となる
console.log(obj3); // 出力: { foo: 123, bar: -999, baz: -9999 }