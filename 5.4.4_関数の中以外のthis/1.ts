class A {
    // インスタンスフィールドfooを初期化
    foo = 123;

    // インスタンスフィールドbarを初期化
    // このとき this はインスタンスを指し、先に初期化された foo にアクセスできる
    bar = this.foo + 100;
}

const obj = new A();
console.log(obj.bar); // 223 と表示される