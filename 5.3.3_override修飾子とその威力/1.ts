// ユーザーを表すクラス
class User {
    name: string;   // 名前（public）
    #age: number;   // 年齢（privateフィールド）

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
    rank: number = 1; // ランク（デフォルトは1）

    // override修飾子により、親クラスのisAdultを上書きすることを明示
    // PremiumUserは年齢に関係なく常に「成人」と判定される
    public override isAdult(): boolean {
        return true;
    }
}