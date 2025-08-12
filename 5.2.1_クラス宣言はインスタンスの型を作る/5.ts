// ジェネリッククラス User<T> である。T は各インスタンスごとに異なる追加データの型を表すである。
class User<T> {
    name: string;     // 公開プロパティである。外部から読み書き可能である。
    #age: number;     // プライベートフィールドである。クラス外から直接参照不可である（#記法）。
    readonly data: T; // 読み取り専用プロパティである。コンストラクタ以外での再代入は不可である。

    constructor(name: string, age: number, data: T) {
        this.name = name;   // name を初期化するである。
        this.#age = age;    // #age を初期化するである（外部からは直接触れない）。
        this.data = data;   // data を初期化するである（readonly だがここでの代入は許可される）。
    }
}

// 変数 uhyo の型注釈に User<string> を指定しているである。
// すなわち T は string と確定し、uhyo.data は string 型になるである。
const uhyo: User<string> = new User("uhyo", 26, "追加データ");