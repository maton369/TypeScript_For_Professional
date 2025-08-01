// objは、fooがnumber型、barがstring型のオブジェクト
const obj = {
    foo: 123,
    bar: "hi"
};

// typeof obj を使って obj の型を取得し、型エイリアスTとして定義
// Tの型は { foo: number; bar: string; } となる
type T = typeof obj;

// obj2はT型（つまり obj と同じ構造）なので、同じプロパティ構成・型を持つ必要がある
const obj2: T = {
    foo: -50, // number型なのでOK
    bar: ""   // string型なのでOK（空文字列もstring型の一部）
};