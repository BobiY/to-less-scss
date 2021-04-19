// 根据输入的值和作用域中已有的变量，解析出变量的真实值
import { MATCH_LESS_VAR_NAME, VAR_PREFIX_LESS } from "../../utils/constant";
export const parseValue =  (varString, scope) => {
  let newValue = varString;
  let result = null
  // todo 表示变量是的值示意 @ 开头
  while((result = MATCH_LESS_VAR_NAME.exec(newValue)) && newValue.startsWith(VAR_PREFIX_LESS)) {
    // result 表示的是匹配到的变量名的第一个字符的索引
    // result 指的是匹配到的变量名
    newValue = newValue.slice(0, result.index - 1) + scope[result[0]];
  }
  return newValue
}

// todo 将嵌套的选择器转换成平铺的模式 
export const handleSelector = (rule) => {
  const { parent } = rule
  // todo 说明不存在嵌套，不需要操作
  if( parent.type === 'root' ){
    return false 
  }
  // todo 说明存在嵌套，需要对他的选择器进行层级平铺操作
  const { selector: parentSelector } = parent
  const { selector } = rule
  rule.selector = `${parentSelector} ${selector}`
  return true
}

