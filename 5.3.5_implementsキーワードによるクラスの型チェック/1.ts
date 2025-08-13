type HasName = {
    name: string; // name プロパティを持つ型（インターフェース）である
}

class User implements HasName {
    name: string; // HasName で要求される name プロパティを実装している
    #age: number; // クラス外部からアクセスできないプライベートフィールドである

    constructor(name: string, age: number) {
        this.name = name; // コンストラクタ引数で name を設定する
        this.#age = age;  // コンストラクタ引数で #age を設定する
    }

    public isAdult(): boolean {
        // #age が 20 以上なら true、それ以外は false を返す
        return this.#age >= 20;
    }
}