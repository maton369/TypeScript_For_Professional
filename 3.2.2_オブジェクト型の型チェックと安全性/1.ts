// objは「foo: number型」「bar: string型」という構造を持つオブジェクトとして型注釈されている
const obj: {
    foo: number;  // fooは数値型
    bar: string;  // barは文字列型でなければならない
} = {
    foo: 123,
    bar: true, // エラー: boolean型（true）はstring型には代入できない
    // 修正するなら bar: "true" のように文字列にすべき
};