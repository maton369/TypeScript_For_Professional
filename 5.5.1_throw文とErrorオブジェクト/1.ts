console.log("エラーを発生させます"); // 実行の開始を通知

// エラーを投げる関数を呼び出し
throwError();

// この行は実行されない（上の行で例外が発生し、処理が中断されるため）
console.log("エラーを発生させました");

// エラーを生成して投げる関数
function throwError() {
    // Errorオブジェクトを作成（エラーの種類やメッセージを指定）
    const error = new Error("エラーが発生しました！！！！！");

    // 例外を発生させ、処理を中断
    throw error;
}