// 通常どおりジェネリクス型引数をすべて指定した使い方
type S = Family<string, string>;
// → Parent = string, Child = string になる

// 型引数を省略すると、デフォルト型引数が適用される
type T = Family;
// → Family<Animal, Animal> と同じ意味になる

// 型引数を1つだけ指定すると、指定したものが Parent に適用され、
// Child にはデフォルトの Animal が適用される
type U = Family<string>;
// → Family<string, Animal> と同じ意味になる