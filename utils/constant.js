// 以 : 结尾的 atrule.name 都作为变量解析
export const VAR_SIGN = ":"
// less 中的变量以 @ 开头
export const VAT_PREFIX_LESS = "@"

// 在字符串中匹配 less 变量的正则
export const MATCH_LESS_VAR_REG = /@\w+/g  