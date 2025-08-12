console.log("Hello"); // "Hello" と表示される

// クラス定義
class C {
    // static初期化ブロック
    static {
        console.log("uhyo"); // クラスが評価された瞬間に実行される
    }
}

console.log("world!"); // "world!" と表示される