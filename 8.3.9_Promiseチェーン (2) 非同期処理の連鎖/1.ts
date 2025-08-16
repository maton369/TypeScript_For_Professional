const repeat10 = (str: string) =>
    new Promise<string>((resolve) => {
        setTimeout(
            () => resolve(str.repeat(10)), // 文字列を10回繰り返したものを返す
            1000                           // 1000ms (1秒) 後に実行
        );
    });