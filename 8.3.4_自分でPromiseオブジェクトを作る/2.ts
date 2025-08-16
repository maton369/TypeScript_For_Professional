// sleep 関数を定義
// duration ミリ秒待った後に resolve を呼び出す Promise<void> を返す
const sleep = (duration: number) => {
    return new Promise<void>((resolve) => {
        // setTimeout を利用して指定時間経過後に resolve を実行
        setTimeout(resolve, duration);
    })
};

// sleep(3000) は「3秒後に成功する Promise<void>」になる
// then を使って、3秒経過した後に実行される処理を記述
sleep(3000).then(() => {
    console.log('3秒経ちました');
});