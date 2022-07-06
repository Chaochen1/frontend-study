// vue之间共享属性和方法抽取出来放在mixin中
export const hunhe = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
    mounted() {
        console.log('你好啊！')
    },
}

export const hunhe2 = {
    data() {
        return {
            x: 100,
            y: 200
        }
    },
}