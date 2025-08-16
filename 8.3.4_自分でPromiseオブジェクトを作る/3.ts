// sleepReject 関数を定義
// duration ミリ秒後に reject を呼び出す Promise<never> を返す
// <never> 型を使うことで、成功することがない（必ず失敗する）ことを表現している
const sleepReject = (duration: number) => {
    return new Promise<never>((resolve, reject) => {
        // duration ミリ秒後に reject を呼び出す
        setTimeout(reject, duration);
    })
};

// sleepReject(3000) は「3秒後に必ず失敗する Promise」となる
// catch を使って失敗時の処理を記述
sleepReject(3000).catch(() => {
    console.log('失敗！！！！');
});