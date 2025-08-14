type Human = {
    name: string;
    age: number | undefined; // 必須プロパティ。値は number または undefined
};

const uhyo: Human = {
    name: "uhyo",
    age: 25 // OK: number
};

const john: Human = {
    name: "John Smith",
    age: undefined // OK: 明示的に undefined を代入
};

// エラー: age は必須プロパティなので省略不可
const taro: Human = {
    name: "Taro Yamada"
};