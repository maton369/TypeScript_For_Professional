interface PromiseFulfilledResult<T> {
    status: "fulfilled";  // 成功した場合は必ず "fulfilled"
    value: T;             // 成功時の返り値
}

interface PromiseRejectedResult {
    status: "rejected";   // 失敗した場合は必ず "rejected"
    reason: any;          // 失敗理由（例外オブジェクトや文字列など）
}

type PromiseSettledResult<T> = PromiseFulfilledResult<T> | PromiseRejectedResult;