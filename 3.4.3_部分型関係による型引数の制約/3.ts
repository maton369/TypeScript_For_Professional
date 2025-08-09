type Animal = {
    name: string; // HasNameを満たす
};
type Human = {
    name: string; // HasNameを満たす
    age: number;
};

// Family<Parent, Child> は Parent, Child がともに HasName を満たす必要がある
type T = Family<Animal, Human>; // ✅ 問題なし