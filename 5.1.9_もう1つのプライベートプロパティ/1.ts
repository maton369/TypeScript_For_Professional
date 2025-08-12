// クラス宣言によるUserクラスの定義
class User {
    name: string; // 公開プロパティ
    #age: number; // クラス外から直接アクセスできないプライベートフィールド（#記法）

    /**
     * コンストラクタ
     * @param name ユーザー名
     * @param age 年齢（プライベートフィールドに格納）
     */
    constructor(name: string, age: number) {
        this.name = name;
        this.#age = age;
    }

    /**
     * 成人かどうかを判定するメソッド
     * @returns 年齢が20以上ならtrue
     */
    public isAdult(): boolean {
        return this.#age >= 20;
    }
}

// インスタンス作成
const uhyo = new User("uhyo", 26);

console.log(uhyo.name);      // "uhyo" が表示される
console.log(uhyo.isAdult()); // true が表示される

// ❌ プライベートフィールドはクラス外から直接アクセスできない
// console.log(uhyo.#age); // コンパイルエラー