class A {
    // 静的フィールド foo を定義し初期化
    static foo = 123;

    // 静的フィールド bar を定義し、静的フィールド foo の値を使って初期化
    static bar = this.foo * 2;

    // 静的初期化ブロック
    // クラスが最初に評価されるときに一度だけ実行される
    static {
        console.log("bar is", this.bar); // "bar is 246" と表示
    }
}