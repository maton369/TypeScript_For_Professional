type Animal = {
    species: string;
};
type Human = {
    name: string;
};

// User型は Animal型 または Human型 のどちらかである共用体型（Union Type）
type User = Animal | Human;

// ❌ エラーになる例
// User型の構成要素（Animal または Human）には 'title' プロパティが存在しないため
// Object literal の余計なプロパティ 'title' は型エラーになる
const book: User = {
    title: "Software Design" // エラー: 'title' はUser型に存在しない
};