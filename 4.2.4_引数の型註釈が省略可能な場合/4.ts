// Greetable型: greetというメソッドを持ち、引数はstring型、戻り値もstring型
type Greetable = {
    greet: (str: string) => string;
}

// Greetable型のオブジェクトを作成
const obj: Greetable = {
    // greetメソッド: 渡された文字列strを使って挨拶文を返す
    greet: (str) => `Hello, ${str}!`
};

// 例: obj.greet("World") → "Hello, World!" が返る