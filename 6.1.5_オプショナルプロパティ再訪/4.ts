type Human = {
    name: string;
    age?: number; // 省略可能なプロパティ
};

const john: Human = {
    name: "John Smith",
    // exactOptionalPropertyTypes が有効だとエラー:
    // Type 'undefined' is not assignable to type 'number'.
    age: undefined
};