// User クラスの定義である。
class User {
    // name プロパティ（文字列型）。初期値は空文字列である。
    name: string = "";
    // age プロパティ（数値型）。初期値は 0 である。
    age: number = 0;

    // 成人かどうかを判定するメソッドである。
    isAdult(): boolean {
        return this.age >= 20;
    }
}

// User クラスのインスタンスを生成するである。
// この時点では name=""、age=0 が設定されているである。
const uhyo = new User();