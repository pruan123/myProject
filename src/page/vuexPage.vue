<template>
  <div>
 <button @click="add()" >增加</button> <span>价格:{{getPrice}} </span > <button @click="reduce()">减少</button>
  </div>
</template>

<script>
  import {mapState, mapGetters,mapMutations} from 'vuex'
    export default {
    computed: {
      ...mapState(['colors','totalPrice']),
      ...mapGetters(['getColor','getPrice'])
    },
    methods: {
      ...mapMutations({add: 'add',reduce: 'reduce'}),
    }
    }
</script>

<style scoped>

</style>
