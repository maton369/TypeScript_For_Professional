// 名前を持つオブジェクト型
// すべての型パラメータは少なくとも name プロパティを持たなければならない
type HasName = {
    name: string;
};

// Family 型
// Parent, Child は HasName を継承（= 必ず name プロパティを持つ）型でなければならない
type Family<Parent extends HasName, Child extends HasName> = {
    mother: Parent; // 母親は Parent 型
    father: Parent; // 父親も Parent 型
    child: Child;   // 子供は Child 型
};