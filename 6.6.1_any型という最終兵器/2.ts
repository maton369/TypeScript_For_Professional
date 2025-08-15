// doWhatever は any を受け取り、あらゆる操作を試みる関数である。
// any は型チェックを無効化するため、コンパイルは通るが実行時エラーの温床である。
function doWhatever(obj: any) {
    // 1) プロパティアクセス：obj.user.name を読む
    //   obj が number や関数であれば .user は存在せず、実行時に TypeError となるである。
    console.log(obj.user.name);

    // 2) 関数呼び出し：obj() を呼ぶ
    //   obj が関数でない（オブジェクトや数値など）場合、実行時に TypeError となるである。
    obj();

    // 3) 計算：obj * 10 を行う
    //   ここまでに例外が起きない場合のみ到達する。型チェックは無いので、
    //   想定外の型が来ても暗黙変換された結果となるである。
    const result = obj * 10;
    return result;
}

// ▼ いずれも「コンパイルは通る」が「実行時エラー」となる例である。

// case A: number を渡す
//   先頭の obj.user.name で number に user が無く、TypeError で落ちるである。
doWhatever(3);

// case B: user.name はあるが関数ではないオブジェクトを渡す
//   obj() 呼び出し時に「obj は関数ではありません」として TypeError で落ちるである。
doWhatever({
    user: {
        name: "uhyo"
    }
});

// case C: 関数を渡す
//   最初の obj.user.name で user が存在せず、TypeError で落ちるである。
doWhatever(() => {
    console.log("hi");
});