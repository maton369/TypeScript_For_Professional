type HasName = {
    name: string;
};

type Animal = {
    name: string;
};

type Human = {
    name: string;
    age: number;
};

// Child extends Parent に変更
type Family<Parent extends HasName, Child extends Parent> = {
    mother: Parent;
    father: Parent;
    child: Child;
};

// ✅ OK: Human は Animal の部分型（プロパティを追加しているだけ）
type S = Family<Animal, Human>;

// ❌ エラー: Animal は Human の部分型ではない
// Human 型は age プロパティを必須にしているが、Animal には age がないため
type T = Family<Human, Animal>;