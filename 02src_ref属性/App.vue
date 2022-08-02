<template>
  <div>
    <h2 ref="h">{{msg}}</h2>
      <School ref="sch"/>
    <button @click="showDom">点我显示属性</button>
  </div>
</template>

<script>
import School from './components/School'
export default {
  name:'App',
  data(){
    return{
      msg:'张张成长'
    }
  },
  components:{School},
  methods:{
    showDom(){
      console.log(this.$refs)
      console.log(this.$refs.h)
      console.log(this.$refs.sch)
    }
  }
}
</script>

<style scoped>

</style>