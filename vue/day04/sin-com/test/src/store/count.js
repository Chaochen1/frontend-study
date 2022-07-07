export default {
    // 需要加上命名空间，要不然访问不到属性
    namespaced: true,

    // actions 用于响应组件中的动作
    actions: {
        jiaOdd(context, value) {
            if (context.state.sum % 2) {
                // action结束之后将结果给mutations进行计算
                context.commit('JIA', value)
            }
        },

        jiaWait(context, vaule) {
            setTimeout(() => {
                context.commit('JIA', vaule)
            }, 500)
        }
    },

    // mutations 用于操作数据，即对state中的数据进行变更
    mutations: {
        JIA(state, value) {
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        }
    },


    // getters 用于将state中的数据进行加工
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },

    // state 用于存储数据
    state: {
        sum: 0,
        school: 'hehai',
        subject: 'chinese'
    }
}