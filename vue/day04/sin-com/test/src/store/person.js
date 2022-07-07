export default {
    // 需要加上命名空间，要不然访问不到属性
    namespaced: true,
    // mutations 用于操作数据，即对state中的数据进行变更
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        }
    },

    // state 用于存储数据
    state: {
        personList: [{ id: '001', name: '张三' }]
    }
}