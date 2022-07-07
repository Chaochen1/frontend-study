<template>
    <div>
        <h1>人员列表</h1>
        <!-- 访问count组件中的数据 -->
		<h3 style="color:red">Count组件求和为:{{sum}}</h3> 
        <input type="text" placeholder="请输入姓名" v-model="name">
        <button @click="add">添加人员</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>   
    </div>
</template>


<script>
    import {nanoid} from 'nanoid'
    export default {
        name:'PersonList',
        data() {
            return {
                name:''
            }
        },
        computed:{
            sum() {
                return this.$store.state.sum
            },
            personList() {
                return this.$store.state.personList
            }
        },
        methods:{
            add(){
                 const personObj = {id:nanoid(),name:this.name}
                 this.$store.commit('ADD_PERSON', personObj)
                 this.name = ''   
            }
        }
    }

</script>

<style>


</style>