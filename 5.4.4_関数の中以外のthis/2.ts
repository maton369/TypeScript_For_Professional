class A {
    // インスタンスフィールド foo を初期化
    foo = 123;

    // インスタンスフィールド bar を初期化
    // このとき this は生成中のインスタンスを指し、先に初期化された foo にアクセスできる
    bar = this.foo + 100;

    // メソッド getFoo: 現在のインスタンスの foo の値を返す
    getFoo() {
        return this.foo;
    }
}

const obj = new A();
// obj.bar → 223（foo が 123 なので 123 + 100）
// obj.getFoo() → 123（foo の値そのもの）
console.log(obj.bar, obj.getFoo()); // 223 123 と表示される