// Animal型: 動物を表すデータ型（tagフィールドで種類を判別）
type Animal = {
    tag: "animal";      // 判別用の固定文字列（判別プロパティ）
    species: string;    // 種の名前
}

// Human型: 人間を表すデータ型（tagフィールドで種類を判別）
type Human = {
    tag: "human";       // 判別用の固定文字列（判別プロパティ）
    name: string;       // 人間の名前
}

// User型: Animal型またはHuman型のユニオン型
type User = Animal | Human;

/**
 * ユーザー名を取得する関数
 * 
 * @param user - Animal型またはHuman型の値
 * @returns - Humanの場合はnameプロパティを返し、
 *            Animalの場合は固定文字列「名無し」を返す
 */
function getUserName(user: User): string {
    // 判別プロパティtagを使って型を絞り込み
    switch (user.tag) {
        case "human":
            // このブロックではuserはHuman型と推論されるため、
            // nameプロパティに安全にアクセスできる
            return user.name;
        case "animal":
            // このブロックではuserはAnimal型と推論される
            // speciesを使うことも可能だが、ここでは固定文字列を返している
            return "名無し";
    }
}

// Animal型の値を作成
const tama: User = {
    tag: "animal",
    species: "Felis silvestris catus"
};

// Human型の値を作成
const uhyo: User = {
    tag: "human",
    name: "uhyo",
};

// 実行例
console.log(getUserName(tama)); // "名無し" と表示
console.log(getUserName(uhyo)); // "uhyo" と表示