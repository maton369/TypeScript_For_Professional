class User {
    // 公開プロパティ（外部からアクセスできる）
    name: string;

    // 非公開プロパティ（クラス外からアクセスできない）
    private age: number;

    constructor(name: string, age: number) {
        // コンストラクタでプロパティを初期化
        this.name = name;
        this.age = age;
    }
}

const uhyo = new User("uhyo", 26);

// ✅ public なプロパティはアクセス可能
console.log(uhyo.name); // "uhyo" と表示される

// ❌ private なプロパティはクラス外からアクセス不可
// エラー: Property 'age' is private and only accessible within class 'User'.
// console.log(uhyo.age);