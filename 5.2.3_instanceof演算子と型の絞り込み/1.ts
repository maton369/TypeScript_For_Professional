class User {
    name: string = ""; // ユーザー名（string型）、初期値は空文字
    age: number = 0;   // 年齢（number型）、初期値は0
}

const uhyo = new User();
// uhyoは new User() で作られているため、Userクラスのインスタンス
console.log(uhyo instanceof User); // true

// 空オブジェクトはUserクラスから生成されていないためfalse
console.log({} instanceof User); // false

// User型として代入はできるが、これは単なるオブジェクトリテラル
// → 実際にはUserクラスから生成されていない
const john: User = {
    name: "John Smith",
    age: 15,
};

// 型注釈がUserでも、インスタンスチェックではfalseになる
console.log(john instanceof User); // false