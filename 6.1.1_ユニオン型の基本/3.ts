type Animal = {
    species: string;
};
type Human = {
    name: string;
};

// User型はAnimal型またはHuman型の共用体型
type User = Animal | Human;

function getName(user: User): string {
    // ❌ エラーになる理由:
    // 共用体型のUserはAnimal型かHuman型か判別できない
    // Animal型には 'name' プロパティが存在しないため、
    // TypeScriptは安全性のため直接 user.name を許可しない
    return user.name;
}