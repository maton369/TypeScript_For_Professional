type Animal = {
    tag: "animal";
    species: string;
};
type Human = {
    tag: "human";
    name: string;
};
type User = Animal | Human;

/**
 * 配列の各要素が Human であることを判定する**配列全体用の型ガード**である
 * - 戻り値の型注釈 `arr is readonly Human[]` により、
 *   true の分岐内では `arr` が Human 配列として扱われるようになるである
 */
function allHuman(arr: readonly User[]): arr is readonly Human[] {
    return arr.every((u): u is Human => u.tag === "human");
}

function getNamesIfAllHuman(users: readonly User[]): string[] | undefined {
    // ❌ 元のエラーの理由:
    //   users.every(user => user.tag === "human") だけでは
    //   TypeScript は users の要素型を Human[] に絞り込まないため、
    //   map 内の user は依然として User 型であり、user.name でエラーになるのである。
    //
    // ✅ 解決: 配列全体を絞り込む型ガード allHuman を用いる
    if (allHuman(users)) {
        // ここでは users は readonly Human[] 型に絞り込まれている
        return users.map(user => user.name);
    }
    return undefined;
}