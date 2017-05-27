export default {
  categories_select: (state) => {
    let list = []
    state.list.map(item => {
      list.push({value: item.id, label: item.name})
    })
    return list
  }
}
