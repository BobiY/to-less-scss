import wapperNode from "../../nodeWapper/eachWapper";
import { VAR_SIGN, MATCH_LESS_VAR_REG, VAR_PREFIX_LESS } from "../../utils/constant";
import { parseValue, handleSelector } from "./parseValue";
function parseScope (node, parentScope = {}, root) {
  // 解析出作用域内的变量
  const newScope = { ...parentScope }
  const hocNode = wapperNode(node)
  // 直接自己的直接子元素  这里处理的是作用于下的变量
  hocNode.eachAtRules(atrule => { //
    // 这里需要考虑到一个变量 是 @@@value
    const { name, params } = atrule
    if (name.endsWith(VAR_SIGN)) {
      newScope[name.slice(0, -1)] = params.startsWith(VAR_PREFIX_LESS) ? parseValue(params, newScope) : params
      atrule.remove() //
    }
  })
  hocNode.eachDecls(decl => {
    const { value } = decl
    // todo 这里需要结合变量的具体使用情况，对属性中的变量进行替换
    if (MATCH_LESS_VAR_REG.test(value)) {
      // 是一个变量，需要做替换
      decl.value = value.replace(MATCH_LESS_VAR_REG, a => {
        // todo 表示匹配到了变量
        if (a) {
          return newScope[a.slice(1)]
        }
      })
    }
  })
  hocNode.eachRules(rule => {
    // 递归每一层的 rule 
    const isRemove = handleSelector(rule)
    if(isRemove) {
      rule.remove()
      root.append(rule)
    }
    // todo 这里可以处理嵌套的 选择器问题
    parseScope(rule, newScope, root)
  })
}

export default parseScope;


