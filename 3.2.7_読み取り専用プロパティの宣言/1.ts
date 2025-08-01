type MyObj = {
    readonly foo: number; // foo プロパティは読み取り専用（再代入できない）
}

const obj: MyObj = { foo: 123 };

// エラー: Cannot assign to 'foo' because it is a read-only property.
// → readonly に指定されたプロパティはオブジェクトが生成された後に変更できない
obj.foo = 0;