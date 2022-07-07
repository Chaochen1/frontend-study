<template>
    <div>
        <h1>当前求和为:{{$store.state.sum}}</h1>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>


<script>

    export default {
        name:'CountN',
        data() {
            return {
                n:1
            }
        },
        methods: {
            increment() {
                // 提交给mutations中的JIA方法执行
                // mutations中的方法名称为大写 actions中的方法名称为小写
                // 若方法不需要条件，直接放入mutations中计算，若需要条件，则需要先放入actions中计算
                this.$store.commit('JIA', this.n)
            },
            decrement() {
                this.$store.commit('JIAN', this.n)
            },
            // 有条件的计算放在actions中，action之间可以级联
            incrementOdd() {
                this.$store.dispatch('jiaOdd', this.n)
            },
            incrementWait() {
                this.$store.dispatch('jiaWait', this.n)
            }
        },
    }

</script>



<style>

button{
		margin-left: 5px;
	}

</style>