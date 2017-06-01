export default {
  categories_select: (state) => {
    let list = []
    state.list.map(item => {
      list.push({value: item.id, label: item.name})
    })
    return list
  },

  categories_array: (state) => {
    let categoriesObj = {}
    state.list.map((item) => {
      categoriesObj[item.id] = item.name
    })
    return categoriesObj
  }
}
