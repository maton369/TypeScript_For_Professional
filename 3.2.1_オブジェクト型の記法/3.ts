// objという変数を定義し、型を明示している。
// fooはnumber型、barはstring型であることを指定している。
const obj: {
    foo: number;  // 数値型のプロパティ foo
    bar: string;  // 文字列型のプロパティ bar
} = {
    foo: 123,             // 実際の値も number 型
    bar: "Hello, world!"  // 実際の値も string 型
};