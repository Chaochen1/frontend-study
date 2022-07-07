//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
import Vuex from 'vuex'

// 使用vuex插件
Vue.use(Vuex)

// actions 用于响应组件中的动作
const actions = {
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
}


// mutations 用于操作数据，即对state中的数据进行变更
const mutations = {
    JIA(state, value) {
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    }
}


// state 用于存储数据
const state = {
    sum: 0
}


// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})