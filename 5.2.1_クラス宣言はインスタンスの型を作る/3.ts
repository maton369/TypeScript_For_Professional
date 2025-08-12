class User {
    name: string = "";
    age: number = 0;

    // 年齢が20歳以上かどうかを判定するメソッドである
    isAdult(): boolean {
        return this.age >= 20;
    }
}

// User クラスのインスタンスを生成し、uhyo 変数に格納するである
// 変数 uhyo の型は User と明示的に指定している
const uhyo: User = new User();

// オブジェクトリテラルでも User 型の構造（プロパティ・メソッド）が一致していれば代入可能である
// この場合、name、age、isAdult メソッドを持つため User 型として認識される
const john: User = {
    name: "John Smith",
    age: 15,
    isAdult: () => true // 年齢判定は固定で true を返すようにしている
};