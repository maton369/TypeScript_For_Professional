type Human = {
    type: "Human";
    name: string;
    age: number;
};

function isHuman(value: any): value is Human {
    // null や undefined を弾く
    if (value == null) return false;

    // type プロパティが "Human" で、
    // name が string 型、age が number 型であれば Human 型とみなす
    return (
        value.type === "Human" &&
        typeof value.name === "string" &&
        typeof value.age === "number"
    );
}