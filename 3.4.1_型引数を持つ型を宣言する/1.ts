// ジェネリック型 User<T> を定義
// T は「child」プロパティの型を外部から指定できる型パラメータ
type User<T> = {
    name: string; // ユーザーの名前
    child: T;     // 子供の情報。型はジェネリック引数Tで決まる
};

// 例: 子供が string 型の場合
const user1: User<string> = {
    name: "Alice",
    child: "Bob" // child は string 型
};

// 例: 子供が { age: number } 型の場合
const user2: User<{ age: number }> = {
    name: "Carol",
    child: { age: 5 } // child は { age: number } 型
};