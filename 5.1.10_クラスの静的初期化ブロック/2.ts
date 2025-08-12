class User {
    // プライベートフィールド（外部から直接アクセスできない）
    #age: number = 0;

    // 年齢を取得するメソッド
    getAge() {
        return this.#age;
    }

    // 年齢を設定するメソッド
    setAge(age: number) {
        // 年齢が0未満または150を超える場合は無視
        if (age < 0 || age > 150) {
            return;
        }
        // バリデーションを通過した場合のみ代入
        this.#age = age;
    }
}

// 使用例
const user = new User();

console.log(user.getAge()); // 0（初期値）
user.setAge(26);
console.log(user.getAge()); // 26

user.setAge(-5);            // 無効な値 → 無視される
console.log(user.getAge()); // 26（変化なし）