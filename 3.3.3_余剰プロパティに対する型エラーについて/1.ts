// User型: ユーザーの名前と年齢を持つ型
type User = {
    name: string; // ユーザー名
    age: number;  // 年齢
};

// User型に従ってオブジェクトを作成
const u: User = {
    name: "uhyo",        // nameはstringなのでOK
    age: 26,             // ageはnumberなのでOK

    // エラー: User型にはtelNumberプロパティが定義されていないため、追加すると型エラーになる
    // Object literal may only specify known properties, and 'telNumber' does not exist in type 'User'.
    telNumber: "09012345678"
};