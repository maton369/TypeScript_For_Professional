// ジェネリッククラス User<T> である。
// T は外部から与える任意の型パラメータで、インスタンスごとに異なる「追加データ」の型を表すである。
class User<T> {
    name: string;   // 公開プロパティである。外部から読み書き可能である。
    #age: number;   // プライベートフィールドである。クラス外から直接アクセス不可である。
    readonly data: T; // 読み取り専用プロパティである。コンストラクタで決めた後は再代入不可である。

    constructor(name: string, age: number, data: T) {
        this.name = name;
        this.#age = age;
        this.data = data; // readonly だが、コンストラクタ内の初期化は許可されるである。
    }

    // インスタンスメソッドである。成人判定を返すである。
    public isAdult(): boolean {
        return this.#age >= 20;
    }
}

// 明示的に型引数を指定する例である。uhyo は User<string> 型となるである。
const uhyo = new User<string>("uhyo", 26, "追加データ");
// data は string 型に推論されるである。
const data = uhyo.data;

// 型引数を省略した場合でも、コンストラクタ引数の型から T が推論されるである。
// ここでは T は { num: number } に推論され、john は User<{ num: number }> 型となるである。
const john = new User("John Smith", 15, { num: 123 });
// data2 は { num: number } 型に推論されるである。
const data2 = john.data;

// 参考：readonly の再代入はエラーである。
// uhyo.data = "書き換え"; // ❌ エラーになるである。