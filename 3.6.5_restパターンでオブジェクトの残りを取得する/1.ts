// オブジェクト分割代入とスプレッド構文の組み合わせ
// obj の中から foo プロパティを取り出し、残りのプロパティを restObj にまとめる
const { foo, ...restObj } = obj;

/*
  例:
  const obj = { foo: 1, bar: 2, baz: 3 };
  上記の分割代入をすると:
    foo     = 1
    restObj = { bar: 2, baz: 3 }
*/