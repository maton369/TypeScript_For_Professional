class User {
    /**
     * コンストラクタ引数にアクセス修飾子（public / privateなど）を付けることで、
     * 自動的にクラスのプロパティとして定義＆初期化される。
     * 
     * @param name 外部からアクセス可能なpublicプロパティ
     * @param age  クラス外からはアクセスできないprivateプロパティ
     */
    constructor(public name: string, private age: number) { }
}

const uhyo = new User("uhyo", 26);

// ✅ public な name はアクセス可能
console.log(uhyo.name); // "uhyo" と表示される

// ❌ private な age はクラス外からアクセスできない
// console.log(uhyo.age); // エラー: 'age' is private and only accessible within class 'User'