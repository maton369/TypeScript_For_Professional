// User クラスの定義
class User {
    // プロパティ name を空文字で初期化
    name: string = "";
    // プロパティ age を 0 で初期化
    age: number = 0;
}

// User クラスから新しいインスタンスを生成
const uhyo = new User();

// デフォルト値（初期化時の値）がそのまま出力される
console.log(uhyo.name); // "" が表示される
console.log(uhyo.age);  // 0 が表示される

// プロパティ age に新しい値を代入
uhyo.age = 26;

// 更新後の値が出力される
console.log(uhyo.age); // 26 が表示される