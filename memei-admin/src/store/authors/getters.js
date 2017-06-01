export default {

  // Select组价格式化参数
  authors_select: (state) => {
    let list = []
    state.list.map(item => {
      list.push({value: item.id, label: item.name})
    })
    return list
  },

  // 类型 id name key-value映射
  authors_array: (state) => {
    let categoriesObj = {}
    state.list.map((item) => {
      categoriesObj[item.id] = item.name
    })
    return categoriesObj
  }
}
