// 型注釈においてもプロパティ名にスペースが含まれる場合はクォートで囲む必要がある
const obj: {
    "foo bar": number;  // "foo bar" という名前の number 型プロパティ
} = {
    "foo bar": 123      // 実際のオブジェクトの初期化でもキーをクォートで囲む
};

console.log(obj["foo bar"]); // 123 と表示される