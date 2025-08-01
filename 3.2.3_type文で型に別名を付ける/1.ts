// 型エイリアス FooBarObj を定義
// foo は number 型、bar は string 型のプロパティを持つオブジェクト型
type FooBarObj = {
    foo: number;
    bar: string;
};

// FooBarObj 型のオブジェクト obj を定義し、正しく初期化
const obj: FooBarObj = {
    foo: 123,              // foo プロパティに数値を代入（OK）
    bar: "Hello, world!"   // bar プロパティに文字列を代入（OK）
};