// foo プロパティが任意（?）の number 型オブジェクト型を定義
type Obj = { foo?: number };

// foo プロパティを持たないオブジェクト（空オブジェクト）
const obj1: Obj = {};
// foo プロパティを持ち、値は -1234 のオブジェクト
const obj2: Obj = { foo: -1234 };

// 分割代入時にデフォルト値を設定
// obj1 には foo が存在しないため、デフォルト値 500 が代入される
const { foo = 500 } = obj1;
console.log(foo); // 500 と表示される

// プロパティ名を bar という変数名に変換しつつ、デフォルト値を設定
// obj2 には foo が -1234 で存在するため、デフォルト値は使われず -1234 が代入される
const { foo: bar = 500 } = obj2;
console.log(bar); // -1234 と表示される