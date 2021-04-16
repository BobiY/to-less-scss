// 根据输入的值和作用域中已有的变量，解析出变量的真实值
import { MATCH_LESS_VAR_NAME, VAR_PREFIX_LESS } from "../../utils/constant";
export default (varString, scope) => {
  let newValue = varString;
  // todo 表示变量是的值示意 @ 开头
  let result = null
  while((result = MATCH_LESS_VAR_NAME.exec(newValue)) && newValue.startsWith(VAR_PREFIX_LESS)) {
    // result 表示的是匹配到的变量名的第一个字符的索引
    // result 指的是匹配到的变量名
    newValue = newValue.slice(0, result.index - 1) + scope[result[0]];
  }
  return newValue
}