type Human = {
    name: string;
    age?: number; // オプショナルプロパティ（指定しても、省略してもOK）
};

const john: Human = {
    name: "John Smith",
    age: undefined // 明示的に undefined を指定することも可能
};