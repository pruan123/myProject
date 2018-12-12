<template>
<div class="demo">
  <button @click="testObj()">测试</button>
</div>
</template>

<script>
    export default {
        name: "classPage",
      methods: {
        testClass(){
          let person = new Person('xiaoming')
          console.log(person.name)
        },
        testClass2(){
          class Person2 {
            constructor(name, age){
              this.name = name
              this.age = age
            }
          }
          let person2 =  new Person2('xiaoming',29)
          console.log(person2)
        },
        testArr(){
          let arr = [1,2,4]
          let brr = [...arr]
          brr.push(5,6,7)
          console.log(brr)
        },
        testObj(){
          let obj2 = {name: 'xiaoming', age: 18}
          let obj1 = {name:' xiaoming', age: 19}
          let obj = {...obj1,obj2}
          console.log(obj)
        }
      }
    }

    function Person(name) {
      this.name = name
    }
</script>

<style lang="scss" scoped>
  .demo {
  }
</style>
