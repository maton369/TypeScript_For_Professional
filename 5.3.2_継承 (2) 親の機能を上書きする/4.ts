// Userクラスを継承したPremiumUserクラス
class PremiumUser extends User {
    // プレミアムユーザーのランク
    rank: number;

    // コンストラクタ
    // 年齢は固定で100として親クラスに渡す
    constructor(name: string, rank: number) {
        // 親クラスのコンストラクタを呼び出し
        // 年齢は100で固定
        super(name, 100);
        // rankを初期化
        this.rank = rank;
    }
}