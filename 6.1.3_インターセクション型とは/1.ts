// Animal型は「種(species)」と「年齢(age)」を持つ動物の型
type Animal = {
    species: string; // 動物の種
    age: number;     // 動物の年齢
}

// Human型はAnimal型を拡張して「名前(name)」を持つ
type Human = Animal & {
    name: string;    // 人間の名前
}

// Animal型のオブジェクトを作成（猫の例）
const tama: Animal = {
    species: "Felis silvestris catus", // 猫の学名
    age: 3                             // 年齢
};

// Human型のオブジェクトを作成（人間の例）
const uhyo: Human = {
    species: "Homo sapiens sapiens",  // ヒトの学名
    age: 26,                           // 年齢
    name: "uhyo"                       // 名前
};