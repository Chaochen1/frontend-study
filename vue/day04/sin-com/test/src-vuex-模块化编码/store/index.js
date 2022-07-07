//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
import Vuex from 'vuex'
import count from './count'
import person from './person'


// 使用vuex插件
Vue.use(Vuex)

// 创建并暴露store
export default new Vuex.Store({
    modules: {
        countAbout: count,
        personAbout: person
    }
})