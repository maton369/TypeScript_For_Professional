// ジェネリック型 Family<Parent, Child> を定義
// Parent: 親の型（母と父の型）
// Child: 子供の型
type Family<Parent, Child> = {
    mother: Parent; // 母の情報
    father: Parent; // 父の情報
    child: Child;   // 子供の情報
};

// 例1: 親も子供も string 型
const stringFamily: Family<string, string> = {
    mother: "Alice",
    father: "Bob",
    child: "Carol"
};

// 例2: 親は { name: string; age: number } 型、子供は string 型
type Human = { name: string; age: number };
const humanFamily: Family<Human, string> = {
    mother: { name: "Alice", age: 30 },
    father: { name: "Bob", age: 32 },
    child: "Carol"
};

// 例3: 親も子供も同じオブジェクト型
type Animal = { species: string; age: number };
const animalFamily: Family<Animal, Animal> = {
    mother: { species: "Cat", age: 3 },
    father: { species: "Cat", age: 4 },
    child: { species: "Cat", age: 1 }
};