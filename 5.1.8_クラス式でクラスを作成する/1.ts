// クラス式（Class Expression）を使ってUserを定義
const User = class {
    name: string;
    age: number;

    /**
     * コンストラクタ
     * @param name ユーザー名
     * @param age  年齢
     */
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    /**
     * 成人かどうかを判定するメソッド
     * @returns 年齢が20以上ならtrue
     */
    public isAdult(): boolean {
        return this.age >= 20;
    }
};

// Userは変数に代入されたクラスとして利用できる
const uhyo = new User("uhyo", 26);

console.log(uhyo.name);      // "uhyo" が表示される
console.log(uhyo.isAdult()); // true が表示される