class User {
    name: string;
    #age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.#age = age;
    }

    // 基底クラスは isChild を提供しているのである（成人判定メソッドは存在しない）
    public isChild(): boolean {
        return this.#age < 20;
    }
}

class PremiumUser extends User {
    rank: number = 1;

    // （問題点）ここは isAdult を定義しているが、基底クラスに isAdult は存在しないため
    // 「オーバーライド」にはなっていないのである（単なる新規メソッドの追加である）
    public isAdult(): boolean {
        return true;
    }
}