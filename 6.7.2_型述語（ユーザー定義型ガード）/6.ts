function checkAndUseHuman(value: unknown) {
    // Human型であることを保証する（失敗時は例外を投げる）
    assertHuman(value);

    // ここから下は value が Human 型として扱われる
    const name = value.name;  // name: string
    console.log(`Hello, ${name}!`);

    // （略）他のHuman特有の処理をここに書ける
    console.log(`Age: ${value.age}`);
}