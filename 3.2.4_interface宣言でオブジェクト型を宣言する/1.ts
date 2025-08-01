// interfaceを使って、オブジェクトの構造を定義
// fooはnumber型、barはstring型
interface FooBarObj {
    foo: number;
    bar: string;
}

// FooBarObj型に適合するオブジェクトを作成
const obj: FooBarObj = {
    foo: 0,           // number型の値
    bar: "string"     // string型の値
};