// Human型：nameプロパティを持つ
type Human = { name: string };

// Animal型：speciesプロパティを持つ
type Animal = { species: string };

// Human型を受け取り、そのnameプロパティを返す関数
function getName(human: Human) {
    return human.name;
}

// Animal型を受け取り、そのspeciesプロパティを返す関数
function getSpecies(animal: Animal) {
    return animal.species;
}

// mysteryFuncには、ランダムで getName か getSpecies のどちらかが代入される
// - getName: (human: Human) => string
// - getSpecies: (animal: Animal) => string
// これらの型は引数名は違うが構造上は別の型として扱われるため、共用体型となる
const mysteryFunc = Math.random() < 0.5 ? getName : getSpecies;