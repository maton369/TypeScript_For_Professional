// PriceData型は、任意の文字列キーを持ち、値がnumber型であるオブジェクトを定義
type PriceData = {
    [key: string]: number;
}

const data: PriceData = {
    apple: 220,
    coffee: 120,
    bento: 500
};

// ✅ OK: 値がnumber型なので問題なし
data.chicken = 250;

// ❌ エラー: "foo" はstring型であり、PriceDataは値にnumber型しか許可していないためコンパイルエラーになる
data.弁当 = "foo"; // Error: Type 'string' is not assignable to type 'number'.