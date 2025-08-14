// これは "foo" という1つの文字列だけを許容するリテラル型
type FooString = "foo";

// OK: FooString型は "foo" のみ許容するため代入可能
const foo: FooString = "foo";

// エラー: "bar" は FooString 型に含まれないため代入不可
// Type '"bar"' is not assignable to type '"foo"'.
const bar: FooString = "bar";