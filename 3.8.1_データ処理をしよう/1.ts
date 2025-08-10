type User = {
    name: string;
    age: number;
    premiumUser: boolean;
};

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

// 文字列を行ごとに分割し、空行を除外
const lines = data.trim().split("\n");

// 各行をパースして User 型の配列に変換
const users: User[] = lines.map(line => {
    const [name, ageStr, premiumStr] = line.split(",");
    return {
        name,
        age: Number(ageStr),               // 年齢は number 型に変換
        premiumUser: premiumStr === "1"    // "1"ならtrue、それ以外はfalse
    };
});

for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name} (${user.age})はプレミアムユーザーです。`);
    } else {
        console.log(`${user.name} (${user.age})はプレミアムユーザーではありません。`);
    }
}