// エラー: FooBarObjがまだ宣言されていないため、ここで使用できない
const obj: FooBarObj = {
    foo: 123,
    bar: "Hello, world!"
};

// FooBarObjの型エイリアスをここで宣言しているが、上で使うには遅すぎる
type FooBarObj = {
    foo: number;
    bar: string;
};