// ジェネリック型 User<N> の定義
// N は name プロパティの型として使われる型パラメータ
type User<N> = {
    name: N;
};

// 使用例1: name を string 型にする
const user1: User<string> = { name: "Alice" };

// 使用例2: name を number 型にする
const user2: User<number> = { name: 12345 };

// 使用例3: name をオブジェクト型にする
const user3: User<{ first: string; last: string }> = {
    name: { first: "John", last: "Doe" }
};

console.log(user1); // { name: "Alice" }
console.log(user2); // { name: 12345 }
console.log(user3); // { name: { first: "John", last: "Doe" } }