<template>
    <div>
        <!-- 不需要在前面再加上$sore.state前缀 -->
        <!-- <h1>当前求和为:{{$store.state.sum}}</h1> -->
        <h1>当前求和为:{{sum}}</h1>
        <!-- <h1>当前求和放大10倍为:{{$store.getters.bigSum}}</h1> -->
        <h1>当前求和放大10倍为:{{bigSum}}</h1>
        <h3>我在{{school}}，学习{{subject}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <!-- 使用mapMutations, mapActions方法需要传递参数 -->
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>


<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
    export default {
        name:'CountN',
        data() {
            return {
                n:1
            }
        },

        // mapState和mapGetters放在计算属性中
        computed:{
            //借助mapState生成计算属性，从state中读取数据。（对象写法）
			// ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

            // 借助mapState生成计算属性，从state中读取数据。（数组写法）
            ...mapState(['sum', 'school', 'subject']),
            ...mapGetters(['bigSum'])
        },

        methods: {
            // increment() {
            //     // 提交给mutations中的JIA方法执行
            //     // mutations中的方法名称为大写 actions中的方法名称为小写
            //     this.$store.commit('JIA', this.n)
            // },
            // decrement() {
            //     this.$store.commit('JIAN', this.n)
            // },


            //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
            ...mapMutations({increment:'JIA', decrement:'JIAN'}),

            // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
            // 组件和store中的方法名需要相同
			// ...mapMutations(['JIA','JIAN']),


            // // 有条件的计算放在actions中，action之间可以级联
            // incrementOdd() {
            //     this.$store.dispatch('jiaOdd', this.n)
            // },
            // incrementWait() {
            //     this.$store.dispatch('jiaWait', this.n)
            // }

            //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
            ...mapActions({incrementOdd:'jiaOdd', incrementWait:'jiaWait'})

            //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
            // 组件和store中的方法名需要相同
			// ...mapActions(['jiaOdd','jiaWait'])
        },
        mounted(){
            // vc下的$store下的state可以看到属性
            // 可以用于调试
            console.log(this);
        }
    }

</script>



<style>

button{
		margin-left: 5px;
	}

</style>