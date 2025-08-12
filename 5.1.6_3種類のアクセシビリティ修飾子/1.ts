class User {
    // 公開プロパティ（外部からアクセス可能）
    name: string;

    // 非公開プロパティ（外部からはアクセス不可）
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // 公開メソッド（外部からアクセス可能）
    public isAdult(): boolean {
        // private プロパティ age にはクラス内部からアクセスできる
        return this.age >= 20;
    }
}

const uhyo = new User("uhyo", 26);

// ✅ public プロパティなのでアクセス可能
console.log(uhyo.name);      // "uhyo" が表示される

// ✅ public メソッドなのでアクセス可能
console.log(uhyo.isAdult()); // true が表示される

// ❌ private プロパティはクラス外からアクセスできない
// エラー: Property 'age' is private and only accessible within class 'User'.
console.log(uhyo.age);