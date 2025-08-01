const res: typeof foo = typeof bar;
//           └────────┬────────┘ └───────┬───────┘
//                型注釈（型位置）         右辺は値の typeof（"string" などを返す）
// エラー: Type 'string' is not assignable to type 'number'（例）

// たとえば以下のように定義されていた場合：
const foo = 123;
const bar = "hello";

// typeof foo → number型（型位置）
// typeof bar → "string"（値位置でのtypeof、実行時評価される）