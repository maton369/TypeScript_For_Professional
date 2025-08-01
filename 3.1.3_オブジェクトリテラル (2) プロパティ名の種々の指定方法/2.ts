const obj = {
    1: "one",                   // 実際のプロパティ名は "1"（文字列）
    2.05: "two point o five",   // 実際のプロパティ名は "2.05"（文字列）
};

// アクセス方法
console.log(obj["1"]);     // → "one"
console.log(obj["2.05"]);  // → "two point o five"