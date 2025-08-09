// FooBar型: fooは文字列型、barは数値型のオブジェクト
type FooBar = {
    foo: string;
    bar: number;
}

// FooBarBaz型: FooBarのプロパティに加えてbaz（真偽値型）を含む
type FooBarBaz = {
    foo: string;
    bar: number;
    baz: boolean;
}

// objはFooBarBaz型として定義
// fooとbarに加えてbazプロパティを持つ
const obj: FooBarBaz = {
    foo: "hi",
    bar: 1,
    baz: false
};

// objはFooBarBaz型だが、FooBar型が要求するプロパティ
// foo: string, bar: number をすべて持っているため、代入が可能
// TypeScriptの構造的型システムにより、余分なプロパティを持っていても問題ない
const obj2: FooBar = obj;

// obj2 は { foo: "hi", bar: 1 } として扱われるが、元の obj には baz も存在している
// ただし obj2 経由では baz にはアクセスできない（FooBar 型には定義されていないため）