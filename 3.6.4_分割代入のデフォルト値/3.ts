const obj = { foo: null };

// 分割代入時のデフォルト値は、変数が undefined のときだけ適用される。
// ここでは obj.foo が null なのでデフォルト値 123 は使われず、null がそのまま代入される。
const { foo = 123 } = obj;
console.log(foo); // null が表示される