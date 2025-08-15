function isStringOrNumber(value: unknown): boolean {
    // 実行時には正しく true/false を返すが、型情報は呼び出し元に伝わらない
    return typeof value === "string" || typeof value === "number";
}

const something: unknown = 123;

if (isStringOrNumber(something)) {
    // ここでエラーになる理由:
    // 戻り値型が boolean だと、TypeScript は something の型を絞り込めない。
    // そのため、この if 内でも something の型は unknown のまま扱われる。
    console.log(something.toString());
}