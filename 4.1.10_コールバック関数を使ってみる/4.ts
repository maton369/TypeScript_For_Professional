// User型の定義
type User = { name: string; age: number };

// ユーザー配列を定義
const users: User[] = [
    { name: "uhyo", age: 26 },
    { name: "John Smith", age: 15 },
    { name: "Mary Sue", age: 70 }
];

// 20歳以上のユーザーだけを抽出（filterは条件に合う要素を配列で返す）
const adultUsers = users.filter((user: User) => user.age >= 20);

// すべてのユーザーが20歳以上か判定（全員条件を満たす場合true）
const all