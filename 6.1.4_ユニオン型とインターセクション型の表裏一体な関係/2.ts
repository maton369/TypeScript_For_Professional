type Human = { name: string };
type Animal = { species: string };

function getName(human: Human) {
    return human.name;
}
function getSpecies(animal: Animal) {
    return animal.species;
}

// ランダムにどちらかの関数が入るである
const mysteryFunc =
    Math.random() < 0.5 ? getName : getSpecies;

// 仮の値
const uhyo: Human = { name: "uhyo" };
const cat: Animal = { species: "Felis silvestris catus" };

// ↓ エラーになる理由：
// mysteryFunc は
//   ((h: Human) => string) | ((a: Animal) => string)
// という「関数型の共用体」である。
// 共用体の関数を安全に呼び出すには、両者の引数型を同時に満たす必要がある。
// そのためコンパイラは実質 (Human & Animal) を要求し、Human だけ／Animal だけ
// を渡すと不足プロパティがありエラーになるのである。

// エラー: Argument of type 'Human' is not assignable to parameter of type 'Human & Animal'.
mysteryFunc(uhyo);

// エラー: Argument of type 'Animal' is not assignable to parameter of type 'Human & Animal'.
mysteryFunc(cat);