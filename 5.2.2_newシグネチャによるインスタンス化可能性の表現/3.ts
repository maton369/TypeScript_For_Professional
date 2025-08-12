class User {
    name: string = ""; // ユーザー名（string型）、初期値は空文字
    age: number = 0;   // 年齢（number型）、初期値は0
}

// コンストラクタ型をオブジェクト型の書き方で定義
// 「引数なしで new でき、User 型のインスタンスを返す」型
type MyUserConstructor = {
    new(): User;
};

// Userは引数なしコンストラクタを持つので、MyUserConstructor型に代入可能
const MyUser: MyUserConstructor = User;

// newでインスタンス化可能
const u = new MyUser();

// uはUser型
console.log(u.name, u.age); // "" 0 が表示される