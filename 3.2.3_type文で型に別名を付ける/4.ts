// FooObj型を定義。fooというnumber型のプロパティを持つ
type FooObj = { foo: number };

// MyObj型をFooObjの別名として定義（構造的には完全に同じ）
type MyObj = FooObj;

// MyObj型（= FooObj型）に適合するオブジェクトを定義
const obj: MyObj = { foo: 0 };