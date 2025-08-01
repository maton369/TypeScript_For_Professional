const obj = {
    foo: 123,
    bar: "Hello, world!",
};

// エラー: Type 'null' is not assignable to type 'number'.
// 理由：obj.foo は number 型として推論されているため、null を代入することはできない
obj.foo = null;