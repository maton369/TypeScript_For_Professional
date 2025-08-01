// objは、プロパティfoo（number型）とbar（string型）の両方を持つ必要がある
const obj: {
    foo: number;
    bar: string;
} = {
    foo: 123,
    // barプロパティが存在しないため、エラーが発生する
    // エラー: Property 'bar' is missing in type '{ foo: number; }' but required in type '{ foo: number; bar: string; }'.
};