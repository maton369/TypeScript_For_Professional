// ユーザーを表す基本クラス
class User {
    name: string;   // 名前
    #age: number;   // 年齢（プライベートフィールド）

    constructor(name: string, age: number) {
        this.name = name;
        this.#age = age;
    }

    // 成人かどうかを判定するメソッド
    public isAdult(): boolean {
        return this.#age >= 20;
    }
}

// プレミアムユーザーを表すクラス（Userを継承）
class PremiumUser extends User {
    rank: number = 1;  // プレミアムランク

    // isAdultをオーバーライドして常にtrueを返す
    public isAdult(): boolean {
        return true;
    }
}

// 通常ユーザー（年齢15）
const john = new User("John Smith", 15);
// プレミアムユーザー（年齢15だがisAdultはtrueを返す）
const taro = new PremiumUser("Taro Yamada", 15);

console.log(john.isAdult()); // false が表示される（年齢で判定）
console.log(taro.isAdult()); // true が表示される（オーバーライドされたメソッド）