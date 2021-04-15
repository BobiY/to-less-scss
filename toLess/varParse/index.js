import wapperNode from "../../nodeWapper/eachWapper";
import {  VAR_SIGN, MATCH_LESS_VAR_REG } from "../../utils/constant";

function parseScope (node, parentScope = {}) {
  // 解析出作用域内的变量
  const newScope = { ...parentScope }
  const hocNode = wapperNode(node)
  // 直接自己的直接子元素
  hocNode.eachAtRules(atrule => {
    const { name, params } = atrule
    if (name.endsWith(VAR_SIGN)) {
      newScope[name.slice(0, -1)] = params
      atrule.remove()
    }
  })
  hocNode.eachDecls(decl => {
    const { value } = decl
    // todo 这里需要结合变量的具体使用情况，对属性中的变量进行替换
    if (MATCH_LESS_VAR_REG.test(value)) {
      // 是一个变量，需要做替换
      decl.value = value.replace( MATCH_LESS_VAR_REG, a => {
        // todo 表示匹配到了变量
        if(a) {
          return newScope[a.slice(1)]
        }
      } )
    }
  })
  hocNode.eachRules(rule => {
    // 递归每一层的 rule 
    parseScope(rule, newScope)
  })
}

export default parseScope;


