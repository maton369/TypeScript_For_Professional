// Userクラスを定義
class User {
    // 公開プロパティ name
    name: string;
    // ECMAScriptのプライベートフィールド #age（クラス内部のみアクセス可能）
    #age: number;

    // コンストラクタ（インスタンス生成時に呼び出される）
    constructor(name: string, age: number) {
        this.name = name; // 引数nameをnameプロパティに代入
        this.#age = age;  // 引数ageをプライベートフィールド#ageに代入
    }

    // パブリックメソッド isAdult（20歳以上か判定）
    public isAdult(): boolean {
        return this.#age >= 20;
    }
}

// Userクラスを継承したPremiumUserクラス
class PremiumUser extends User {
    // プレミアム会員ランク（デフォルトは1）
    rank: number = 1;
}

// PremiumUserクラスのインスタンスを生成
const uhyo = new PremiumUser("uhyo", 26);

// rankプロパティを表示（サブクラス独自のプロパティ）
console.log(uhyo.rank);      // 1 が表示される
// nameプロパティを表示（親クラスのpublicプロパティ）
console.log(uhyo.name);      // "uhyo" が表示される
// isAdultメソッドを呼び出し（親クラスのpublicメソッド）
console.log(uhyo.isAdult()); // true が表示される
// uhyo.#age は直接アクセスできない（コンパイルエラー）