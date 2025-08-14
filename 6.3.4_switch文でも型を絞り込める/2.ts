// 判別可能ユニオン: Animal | Human | Robot のいずれかである
type Animal = {
    tag: "animal";     // 判別プロパティである
    species: string;
}
type Human = {
    tag: "human";      // 判別プロパティである
    name: string;
}
type Robot = {
    tag: "robot";      // 判別プロパティである
    name: string;
}
type User = Animal | Human | Robot;

// ▼ if による絞り込みの例である
function getUserName1(user: User): string {
    if (user.tag === "human") {
        // ここでは user は Human 型に絞り込まれるので name に安全にアクセスできる
        return user.name;
    } else {
        // Human 以外（Animal または Robot）のときは固定文字列を返す
        return "名無し";
    }
}

// ▼ switch による絞り込みの例である
//   現状のコードは Robot ケースを返していないため、すべての経路が値を返すことを
//   コンパイラが保証できず、エラーになるのである。
//   （human, animal は return するが、robot のときに関数末尾まで落ちる可能性があるため）
function getUserName2(user: User): string {
    switch (user.tag) {
        case "human":
            return user.name;
        case "animal":
            return "名無し";
        // ★ Robot の分岐が無いことがエラー原因である
    }
    // ここに到達しうる（robot のとき）ため、"string を必ず返す" 契約を満たせずエラーとなる
}

// ▼ 修正版1: Robot を明示的に処理するである
function getUserName2_fixed(user: User): string {
    switch (user.tag) {
        case "human":
            return user.name;
        case "animal":
            return "名無し";
        case "robot":
            return `robot:${user.name}`; // 振る舞いは用途に応じて決めるである
    }
}

// ▼ 修正版2: 網羅性チェック（exhaustive check）を加えるである
function getUserName2_exhaustive(user: User): string {
    switch (user.tag) {
        case "human":
            return user.name;
        case "animal":
            return "名無し";
        case "robot":
            return `robot:${user.name}`;
        default: {
            // ここに来るのは理論上 never 型のみである（新ケース追加の検知用）
            const _exhaustive: never = user;
            return _exhaustive;
        }
    }
}