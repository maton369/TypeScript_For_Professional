type Human = {
    name: string;
    age?: number; // ageは省略可能なプロパティ（オプショナル）
};

// ageを指定したパターン
const uhyo: Human = {
    name: "uhyo",
    age: 25
};

// ageを省略したパターン（省略してもエラーにならない）
const john: Human = {
    name: "John Smith"
};