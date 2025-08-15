function showNumber(obj: Option<number>) {
    // Option<number> 型は { tag: "some", value: number } と { tag: "none" } の
    // どちらかなので、obj.value にアクセスする前に tag の値で絞り込みを行う必要がある
    if (obj.tag === "some") {
        // この分岐内では obj は { tag: "some", value: number } 型と推論される
        console.log(obj.value);
    }
}