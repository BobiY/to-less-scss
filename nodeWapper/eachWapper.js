// 对 postcss 的 each 方法做一个二次封装，以使其和 walkAtRules walkRules walkDecls walkComments 返回的结果一致

const wapperNode = node => {
  const allType = {
    'atrule': [],
    'rule': [],
    'decl': []
  }
  node.each( child => {
    const { type } = child
    if(allType[type]) {
      allType[type].push(child)
    }
  } )
  return {
    node,
    eachAtRules (callback) {
      allType.atrule.forEach(callback)
    },
    eachRules(callback) {
      allType.rule.forEach(callback)
    },
    eachDecls(callback) {
      allType.decl.forEach(callback)
    }
  }
}

export default wapperNode