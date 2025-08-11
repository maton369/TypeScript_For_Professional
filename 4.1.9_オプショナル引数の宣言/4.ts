// エラーになる例
// 可選パラメータ（str?: string）の後に必須パラメータ（upper: boolean）があると構文エラーになる
// TypeScript の仕様では、可選パラメータは必須パラメータより後ろに置くことはできない
const toLowerOrUpper = (str?: string, upper: boolean): string => {
    if (upper) {
        return (str ?? "").toUpperCase();
    } else {
        return (str ?? "").toLowerCase();
    }
};