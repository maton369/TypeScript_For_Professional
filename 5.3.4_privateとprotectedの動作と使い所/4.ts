class User {
    name: string;
    protected age: number;     // サブクラスからは参照・代入できるprotectedである
    private _isAdult: boolean; // 「成人か」をキャッシュするprivateフラグである

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this._isAdult = age >= 20; // 生成時の年齢から一度だけ判定して保持するである
    }

    public isAdult(): boolean {
        // 現在の年齢ではなく、コンストラクタ時に決めたフラグを返しているである
        return this._isAdult;
    }
}

class PremiumUser extends User {
    // プレミアムユーザーは自分の年齢を編集できる
    public setAge(newAge: number) {
        // protectedなのでサブクラスから代入可能である
        this.age = newAge;

        // ⚠ ここで _isAdult を更新していないため、
        //    isAdult() は古い判定のまま（キャッシュが陳腐化）である
    }
}

const uhyo = new PremiumUser("uhyo", 26);
console.log(uhyo.isAdult()); // true が表示される（26 >= 20 でコンストラクタ時にtrueがセット済）

uhyo.setAge(15);
console.log(uhyo.isAdult()); // true が表示される（⚠ 年齢は15だが、フラグが更新されていないため）