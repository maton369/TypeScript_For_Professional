function doNothing(val: unknown) {
    // unknown 型は直接プロパティアクセスできないため、型ガードが必要である
    if (typeof val === "object" && val !== null && "name" in val) {
        // ここで val は { name: unknown } 型に絞られる
        const name = (val as { name: string }).name; // 型アサーションで string 型にする
        console.log(name);
    } else {
        console.log("name プロパティは存在しない");
    }
}