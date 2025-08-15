type HasToString = {
    toString: () => string; // toString を持つことだけを要求する型である
};

// 引数 value は「toString を持つ」かつ「object 型である」ことを要求しているである
// つまりプリミティブ（number / string / boolean / symbol / bigint / null / undefined）は不可である
function useToString2(value: HasToString & object) {
    console.log(`value is ${value.toString()}`);
}

// ✅ オブジェクトは object 制約を満たすのでOKである
useToString2({
    toString() {
        return "foo!";
    }
});

// ❌ number はプリミティブであり object ではないため渡せないである
// エラー: Argument of type 'number' is not assignable to parameter of type 'HasToString & object'.
//        Type 'number' is not assignable to type 'object'.
useToString2(3.14);