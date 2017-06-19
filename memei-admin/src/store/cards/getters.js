export default {

  // Select组价格式化参数
  cards_select: (state) => {
    let list = []
    state.list.map(item => {
      list.push({value: item.id, label: item.title})
    })
    return list
  },

  // 类型 id name key-value映射
  cards_array: (state) => {
    let obj = {}
    state.list.map((item) => {
      obj[item.id] = item.title
    })
    return obj
  }

}
