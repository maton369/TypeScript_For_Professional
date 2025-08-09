// Animal 型：name プロパティを持つ最小の型
type Animal = {
    name: string;
}

// Family 型（ジェネリクス）
// ・Parent のデフォルト型は Animal
// ・Child のデフォルト型も Animal
// 型引数を省略した場合は、mother/father/child すべて Animal として扱われる
type Family<Parent = Animal, Child = Animal> = {
    mother: Parent; // 母の型（省略時は Animal）
    father: Parent; // 父の型（省略時は Animal）
    child: Child;   // 子の型（省略時は Animal）
}