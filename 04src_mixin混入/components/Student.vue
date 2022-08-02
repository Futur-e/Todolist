<template>
  <div>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学校性别：{{ sex }}</h2>
  </div>
</template>

<script>
import {mixin1} from "@/mixin";

export default {

  name: 'Student',
  data(){
    return{
      name:'张张',
      sex:18
    }
  },
  mixins:[mixin1]
}
</script>

<style scoped>

</style>