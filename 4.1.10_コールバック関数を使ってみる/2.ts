// User型の定義（nameは文字列、ageは数値）
type User = { name: string; age: number };

// User型を受け取り、デバッグ用に中身を出力してからnameを返す関数
const getName = (u: User): string => {
    // 引数uの中身をコンソールに表示（デバッグ用途）
    console.log("u is", u);
    // nameプロパティを返す
    return u.name;
};

// User型の配列を定義
const users: User[] = [
    { name: "uhyo", age: 26 },
    { name: "John Smith", age: 15 }
];

// mapメソッドでusers配列の各要素にgetNameを適用し、nameの配列を作成
const names = users.map(getName);

// 最終的なnameの配列を出力
console.log(names); // ["uhyo", "John Smith"] と表示される