type MyObj = {
    foo: boolean;
    bar: boolean;
    baz?: number; // bazは省略可能（undefinedの可能性がある）
};

const obj: MyObj = { foo: false, bar: true };
const obj2: MyObj = { foo: true, bar: false, baz: 1234 };

// これはコンパイルエラー：
// obj.baz は number | undefined の型なので、undefined かもしれない状態で演算できない
console.log(obj.baz * 1000);
// エラー: Object is possibly 'undefined'.

// 安全に扱うには undefined でないことをチェックする必要がある
if (obj2.baz !== undefined) {
    // このブロック内では obj2.baz は number 型として扱われるため OK
    console.log(obj2.baz * 1000); // 1234000 と表示される
}