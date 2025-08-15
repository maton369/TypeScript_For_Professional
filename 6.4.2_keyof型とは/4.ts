// 問題のある実装例である。
// unit が string 型だと、mmConversionTable のキー型（"mm" | "m" | "km"）より広く、
// インデックスアクセス時に「string ではこのオブジェクトを安全に引けない」としてエラーになるのである。
function convertUnits_bad(value: number, unit: string) {
    // エラー:
    // Element implicitly has an 'any' type because expression of type 'string'
    // can't be used to index type '{ mm: number; m: number; km: number; }'.
    // No index signature with a parameter of type 'string' was found on type '{ mm: number; m: number; km: number; }'.
    const mmValue = value * mmConversionTable[unit];
    return {
        mm: mmValue,
        m: mmValue / 1e3,
        km: mmValue / 1e6
    };
}