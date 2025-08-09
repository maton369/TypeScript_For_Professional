type NestedObj = {
    obj?: { // obj プロパティは省略可能で、型は { foo: number }
        foo: number
    }
};

const nested1: NestedObj = {
    obj: { foo: 123 } // obj が存在し、foo に 123 が入っている
};

const nested2: NestedObj = {
    // obj が省略されている（undefined）
};

// デフォルト値付きの分割代入
// obj が存在する場合はその中の foo を取り出す
// obj が undefined の場合は { foo: 500 } を使う
// nested1.obj.foo は 123 なので foo1 = 123
const { obj: { foo: foo1 } = { foo: 500 } } = nested1;

// nested2.obj は undefined なので { foo: 500 } がデフォルトとして使用される
// よって foo2 = 500
const { obj: { foo: foo2 } = { foo: 500 } } = nested2;