class User {
    name: string;
    age: number;

    // コンストラクタ（インスタンス生成時に必ず呼ばれる）
    constructor(name: string, age: number) {
        this.name = name; // プロパティ name に引数 name を代入
        this.age = age;   // プロパティ age に引数 age を代入
    }

    // 成人判定メソッド
    isAdult(): boolean {
        return this.age >= 20;
    }
}