class User {
    name: string = ""; // ユーザー名（string型）、初期値は空文字
    age: number = 0;   // 年齢（number型）、初期値は0
}

// Userクラスのコンストラクタ型を表す型エイリアス
// new () => User は「引数なしで new でき、User 型のインスタンスを返す」型
type MyUserConstructor = new () => User;

// Userクラスは引数なしコンストラクタを持つため、MyUserConstructor型に代入可能
const MyUser: MyUserConstructor = User;

// MyUserはコンストラクタとして使用できる
const u = new MyUser();

// uはUser型のインスタンスであり、nameとageにアクセスできる
console.log(u.name, u.age); // "" 0 が表示される