// User型の定義
type User = { name: string; age: number };

// User型のオブジェクトを受け取り、そのnameプロパティを返す関数
const getName = (u: User): string => u.name;

// User型の配列を作成
const users: User[] = [
    { name: "uhyo", age: 26 },
    { name: "John Smith", age: 15 }
];

// mapを使ってusers配列からnameだけを取り出した配列を生成
const names = users.map(getName);

// ["uhyo", "John Smith"] と表示される
console.log(names);