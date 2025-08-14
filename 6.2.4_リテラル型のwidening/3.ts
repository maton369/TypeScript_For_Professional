// "uhyo" または "john" のどちらかの文字列リテラル型しか許容しない共用型
let uhyo: "uhyo" | "john" = "uhyo";

// "john" は許可されているため代入可能
uhyo = "john";

// 他の文字列は許可されていないためエラー
uhyo = "alice";
// エラー: Type '"alice"' is not assignable to type '"uhyo" | "john"'.