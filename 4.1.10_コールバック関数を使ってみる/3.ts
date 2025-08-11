// User型を定義（nameは文字列、ageは数値）
type User = { name: string; age: number };

// User型の配列を定義
const users: User[] = [
    { name: "uhyo", age: 26 },
    { name: "John Smith", age: 15 }
];

// mapメソッドを使って各Userのnameプロパティだけを抽出
// コールバック関数の引数uはUser型、戻り値はstring型と明示
const names = users.map((u: User): string => u.name);

// 抽出したnameの配列を出力
console.log(names); // ["uhyo", "John Smith"] と表示される