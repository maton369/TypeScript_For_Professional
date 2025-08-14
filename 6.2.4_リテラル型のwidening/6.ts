// Human型の定義
// name と age プロパティは readonly なので再代入不可
type Human = {
    readonly name: string;
    readonly age: number;
};

// Human型のオブジェクトを作成
const uhyo: Human = {
    name: "uhyo",
    age: 26
};

// エラー: Cannot assign to 'name' because it is a read-only property.
// uhyo.name = "john";

// エラー: Cannot assign to 'age' because it is a read-only property.
// uhyo.age = 30;