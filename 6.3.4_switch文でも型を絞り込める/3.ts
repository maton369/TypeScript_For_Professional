// 判別可能ユニオン型を用いた例である
function getUserName2(user: User): string {
    switch (user.tag) {
        case "human":
            // user.tag が "human" の場合、user は Human 型に絞り込まれる
            // よって name プロパティに安全にアクセスできる
            return user.name;

        case "animal":
            // user.tag が "animal" の場合、user は Animal 型に絞り込まれる
            // species は使わず、固定文字列 "名無し" を返す
            return "名無し";

        case "robot":
            // user.tag が "robot" の場合、user は Robot 型に絞り込まれる
            // name プロパティを CPU 名のようにフォーマットして返す
            return `CPU ${user.name}`;
    }
    // ここには到達しない想定である（User型がAnimal|Human|Robotの3種のみ）
}