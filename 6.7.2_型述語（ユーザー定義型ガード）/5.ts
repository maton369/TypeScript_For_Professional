function assertHuman(value: any): asserts value is Human {
    // null または undefined を弾く
    if (value == null) {
        throw new Error('Given value is null or undefined');
    }

    // type, name, age の型チェック
    if (
        value.type !== "Human" ||           // type が "Human" でない
        typeof value.name !== "string" ||   // name が string でない
        typeof value.age !== "number"       // age が number でない
    ) {
        throw new Error('Given value is not a Human');
    }
}