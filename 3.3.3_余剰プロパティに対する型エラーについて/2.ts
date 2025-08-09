// User型: ユーザー名と年齢を持つ型
type User = {
    name: string; // ユーザー名
    age: number;  // 年齢
};

// 型アノテーションなしのオブジェクトを定義
// この時点ではTypeScriptはobjを { name: string; age: number; telNumber: string } 型として推論する
const obj = {
    name: "uhyo",
    age: 26,
    telNumber: "09012345678" // User型には存在しないプロパティ
};

// objにはUser型にないtelNumberがあるが、
// 変数objとしてはOK（型推論によって許可される）
// 代入時には部分型として扱われるためエラーにはならない
const u: User = obj;