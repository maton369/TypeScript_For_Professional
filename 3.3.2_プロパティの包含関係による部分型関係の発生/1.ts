// Animal型: 動物を表す型で、年齢(age)プロパティを持つ
type Animal = {
    age: number; // 年齢（数値型）
};

// Human型: 人間を表す型で、Animal型のageに加え、名前(name)プロパティを持つ
type Human = {
    age: number;   // 年齢（数値型）
    name: string;  // 名前（文字列型）
};