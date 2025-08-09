// HasName 型（name プロパティを必須とする型）
type HasName = {
    name: string;
};

// Family 型
// - Parent は HasName を満たす型である必要がある（制約あり）
// - Child も HasName を満たす必要があるが、省略時は Animal 型がデフォルトとなる
type Family<Parent extends HasName, Child extends HasName = Animal> = {
    mother: Parent; // 親1
    father: Parent; // 親2
    child: Child;   // 子（省略時は Animal）
};

// Animal 型（HasName 制約を満たす）
type Animal = {
    name: string;
};