// 变量输入输出
// var age = prompt("请输入年龄")
var age = 19
console.log('输入的年龄是：' + age)
    // alert(age)
    // 输入默认是字符串类型
console.log(typeof age)
    // 类型转换
console.log(typeof Number(age))

// 变量声明之后没有复制，则类型是undefined
var b
console.log(b)