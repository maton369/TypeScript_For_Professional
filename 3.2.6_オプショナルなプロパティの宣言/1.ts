// MyObj型の定義：fooとbarは必須のboolean型プロパティ、bazは任意のnumber型プロパティ
type MyObj = {
    foo: boolean;
    bar: boolean;
    baz?: number; // 省略可能（あってもなくてもよい）
}

// ✅ fooとbarのみ指定している。bazは省略しているが問題ない（optionalなので）
const obj: MyObj = { foo: false, bar: true };

// ✅ bazも含めてすべて指定している。型にも適合しており正しい
const obj2: MyObj = { foo: true, bar: false, baz: 1234 };