function useNumber(num: number) {
    console.log(num);
}

function doWhatever(obj: any) {
    // any を用いると型検査が無効化されるため、いかなる型にも代入できてしまうのである
    // ここでは obj が実際には string でない可能性があっても、コンパイルは通ってしまうである
    const str: string = obj; // ✅ コンパイルは通るが、型安全ではないである

    // number 型を要求する関数にも渡せてしまうである
    // 実際に obj が number でない場合、実行時に意図しない動作やエラーの原因となるである
    useNumber(obj); // ✅ コンパイルは通るが、危険である
}