function doNothing(val: unknown) {
    // unknown 型は受け取ることはできるが、直接的なプロパティアクセスや演算はできないである
    // ただし console.log はどんな型でも引数に取れるため、そのまま表示できるである
    console.log(val);
}

// doNothing には unknown 型パラメータがあるため、任意の型の値を引数として渡すことが可能である

// 数値を渡す
doNothing(3);

// オブジェクトを渡す
doNothing({
    user: {
        name: "uhyo"
    }
});

// 関数を渡す
doNothing(() => {
    console.log("hi");
});