// 親クラス User を継承した PremiumUser クラス
class PremiumUser extends User {
    // rank（会員ランク）を追加で保持
    rank: number;

    // コンストラクタ
    constructor(name: string, age: number, rank: number) {
        // 親クラス User のコンストラクタを呼び出して name と age を初期化
        super(name, age);
        // PremiumUser 独自の rank を初期化
        this.rank = rank;
    }
}

// PremiumUser のインスタンスを生成
const uhyo = new PremiumUser("uhyo", 26, 3);

// 親クラスから継承したプロパティ name にアクセス
console.log(uhyo.name); // "uhyo" が表示される

// PremiumUser 独自のプロパティ rank にアクセス
console.log(uhyo.rank); // 3 が表示される