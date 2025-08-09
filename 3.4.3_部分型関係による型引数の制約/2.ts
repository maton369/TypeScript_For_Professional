// 名前を持つオブジェクト型
type HasName = {
    name: string;
};

// Parent と Child は必ず HasName を満たす必要がある
type Family<Parent extends HasName, Child extends HasName> = {
    mother: Parent;
    father: Parent;
    child: Child;
};

// ❌ エラー: number型は name プロパティを持たないため HasName を満たさない
type T = Family<number, string>;