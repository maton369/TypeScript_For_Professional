const User = class {
    name: string = "";
    age: number = 0;

    // 年齢が20歳以上かどうかを判定するメソッドである
    isAdult(): boolean {
        return this.age >= 20;
    }
};

// これはOK: クラス式 User のインスタンスを生成している
const uhyo = new User();

// これはエラーになる:
// 理由: User は「クラス式を代入した変数」であり、型としては直接利用できない
// 「User」という名前は値（runtime value）としてのみ存在するため、型注釈に使うとコンパイラが型を見つけられない
// 型として使う場合は `typeof User` でコンストラクタの型を取得するか、
// `InstanceType<typeof User>` でインスタンスの型を取得する必要がある
// 修正版:
const john: InstanceType<typeof User> = new User();