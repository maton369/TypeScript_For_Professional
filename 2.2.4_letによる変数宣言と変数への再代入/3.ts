// `greeting` は "Hello, " を初期値として持つ定数である。
// `const` を用いて定義されているため、再代入はできない。
const greeting = "Hello, ";

// ❌ エラー発生箇所：`const` で定義された変数に再代入を試みている。
// TypeScript はこれを静的に検出し、次のようなエラーを出力する：
//
// エラー:
// Cannot assign to 'greeting' because it is a constant.
//
// この行はコンパイルエラーになるため、実行はされない。
greeting = greeting + "world!";