<template>
  <div>
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
// import {mixin} from "@/mixin";

export default {
  name: 'School',
  data(){
    return{
      name:'张张',
      address:'张张成长'
    }
  },
  // mixins:[mixin]
}
</script>

<style scoped>

</style>