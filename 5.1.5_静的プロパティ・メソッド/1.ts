class User {
    // ✅ クラス（静的）プロパティ：クラス名から参照する値である
    static adminName: string = "uhyo";

    // ✅ クラス（静的）メソッド：インスタンス化せずに呼べる
    static getAdminUser() {
        // 静的メンバーはクラス名(User)経由で参照する
        return new User(User.adminName, 26);
    }

    // ✅ インスタンスプロパティ：インスタンスごとに異なる値を持つ
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name; // this は生成されたインスタンスを指す
        this.age = age;
    }

    // ✅ インスタンスメソッド：インスタンスから呼び出す
    isAdult(): boolean {
        return this.age >= 20;
    }
}

// --- 使い方 ---
// 静的プロパティはクラス名から参照する
console.log(User.adminName);  // "uhyo" が表示される

// 静的メソッドもクラス名から呼ぶ
const admin = User.getAdminUser();
console.log(admin.age);       // 26 が表示される
console.log(admin.isAdult()); // true が表示される

// インスタンス生成
const uhyo = new User("uhyo", 26);

// ❌ エラー例：静的プロパティをインスタンスから参照しようとしている
// エラー: Property 'adminName' does not exist on type 'User'.
//        Did you mean to access the static member 'User.adminName' instead?
console.log(uhyo.adminName);

// ✅ 正しい参照方法（静的メンバーは常にクラス名経由）
console.log(User.adminName);