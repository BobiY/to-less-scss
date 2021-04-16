// 以 : 结尾的 atrule.name 都作为变量解析
export const VAR_SIGN = ":"
// less 中的变量以 @ 开头
export const VAR_PREFIX_LESS = "@"

// 在字符串中匹配 less 变量的正则
export const MATCH_LESS_VAR_REG = /@\w+/g  

// 支持的表达式


// 将多层嵌套的变量定义解析为常亮 的匹配正则
// 使用 exec 匹配，设置不能设置 g 全局，会导致只能匹配一次，除非匹配到 null 是才会重置索引
export const MATCH_LESS_VAR_NAME = /\w+/
