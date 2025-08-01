const obj = {
    foo: 123,
    bar: "Hello, world!",
};

// エラー: Property 'hoge' does not exist on type '{ foo: number; bar: string; }'.
// 理由：obj は 'foo'（number型）と 'bar'（string型）しか持っていない。
// 'hoge' プロパティは存在しないため、型エラーが発生する。
console.log(obj.hoge);