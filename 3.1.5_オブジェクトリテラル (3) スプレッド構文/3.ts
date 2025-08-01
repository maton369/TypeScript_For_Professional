const obj1 = {
    foo: 123,
    bar: 456,
    baz: 789
};

// エラー: 'foo' is specified more than once, so this usage will be overwritten.
const obj2 = {
    foo: -9999,  // ここでfooプロパティを最初に指定
    ...obj1      // しかし、obj1にもfooが含まれており（foo: 123）、これが上書きされる
};

// 結果として、obj2.foo の値は 123 になる
console.log(obj2); // { foo: 123, bar: 456, baz: 789 }