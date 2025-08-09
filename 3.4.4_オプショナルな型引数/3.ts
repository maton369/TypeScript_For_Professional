// ジェネリクス型引数 Parent は必須、Child は省略可能でデフォルトは Animal 型
type Family<Parent, Child = Animal> = {
    mother: Parent; // 親1の型
    father: Parent; // 親2の型
    child: Child;   // 子の型（省略時は Animal）
};