// オブジェクトリテラルを定義
// name プロパティは "uhyo" 型、age プロパティは 26 型として推論される
const uhyo = {
    name: "uhyo",
    age: 26
};

// name プロパティは string 型として扱われるため、"john" など他の文字列も代入可能
uhyo.name = "john"; // OK

// 推論型は以下の通り（const でもプロパティは再代入可能）
// const uhyo: {
//   name: string;
//   age: number;
// }