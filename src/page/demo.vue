<template>
  <div>
    <p>input1=><input type="text" id="input1"></p>
    <p>input2=><input type="text" id="input2"></p>
    <div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: "hello world",
        args: [0, 1, 2],
        obj1: {},
        obj2: {}
      }
    },
    methods: {
      test(a, b, c) {
        console.log(a, b, c)
      }
    },
    mounted() {
      this.test.apply(null, this.args)
      this.test(...this.args) //展开运算符
      Object.defineProperties(this.obj1, {name: {value: 'aaa'}})
      Object.defineProperties(this.obj2, {detail: {value: 'bbb'}})
      var obj3 = Object.assign(this.obj1, this.obj2)
      console.log(this.obj2, 88)
      console.log(obj3, 99)
    }
  }
</script>
<style lang="scss" scoped>

</style>
