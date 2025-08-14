// string または number 型を許容する共用型（Union Type）の変数宣言
let uhyo: string | number = "uhyo";

// 共用型なので string 型を代入してもOK
uhyo = "john";

// number 型を代入してもOK
uhyo = 3.14;