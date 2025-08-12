class User {
    // プロパティ
    name: string = "";   // ユーザー名（デフォルト値は空文字）
    age: number = 0;     // 年齢（デフォルト値は 0）

    // メソッド: 成人判定
    isAdult(): boolean {
        return this.age >= 20; // 年齢が20以上ならtrue
    }

    // メソッド: 年齢を変更
    setAge(newAge: number) {
        this.age = newAge;
    }
}