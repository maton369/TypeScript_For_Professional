class User {
    name: string;   // ユーザー名である
    #age: number;   // プライベートフィールドである。同クラス本体内からのみ参照可能である

    constructor(name: string, age: number) {
        this.name = name;   // 外部から受け取った名前を代入するである
        this.#age = age;    // 外部から受け取った年齢を代入するである
    }

    public isAdult(): boolean {
        // 20歳以上なら成人とみなすである
        return this.#age >= 20;
    }

    public filterOlder(users: readonly User[]): User[] {
        // 引数の配列から「自分(this)より年上」のユーザーだけを抽出して返すである
        // 注意: #age は同一クラス本体内であれば「別インスタンス u の #age」にもアクセス可能である
        return users.filter(u => u.#age > this.#age);
    }
}

const uhyo = new User("uhyo", 25);
const john = new User("John Smith", 15);
const bob = new User("Bob", 40);

// uhyo より年上（25より大きい年齢）のユーザーを抽出するである → Bob が該当するである
const older = uhyo.filterOlder([john, bob]);

// 出力例: [ User { name: "Bob" } ] のように見えることがあるである
// 理由: #age はプライベートフィールドであり列挙・表示されないため、ログには出てこないである
console.log(older);