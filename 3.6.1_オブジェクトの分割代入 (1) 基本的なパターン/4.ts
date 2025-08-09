const obj = {
    str: "hello, world!",
    num: 1234
};

const {
    // 存在しないプロパティ 'foo' を分割代入しようとしているためコンパイルエラー
    // エラー内容:
    //   Property 'foo' does not exist on type '{ str: string; num: number; }'.
    foo
} = obj;