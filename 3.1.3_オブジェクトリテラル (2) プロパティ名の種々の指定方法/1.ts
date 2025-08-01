const obj = {
    foo: 123,            // 通常の識別子（プロパティ名）
    "foo bar": -500,     // スペースを含む文字列リテラルによるプロパティ名
    "↑↓↑↓": "",          // 記号も文字列としてプロパティ名に使用可能
};

// ドット記法：foo プロパティには通常の識別子なのでドット記法でアクセス可能
console.log(obj.foo);         // → 123 と表示される

// ブラケット記法：スペースや特殊文字を含むプロパティには文字列リテラルでアクセスする
console.log(obj["foo bar"]);  // → -500 と表示される