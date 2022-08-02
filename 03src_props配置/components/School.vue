<template>
  <div>
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
  name:'school',
  // 简单声明
  // props:['name','address']
  // 接受的同时对数据进行类型限制
  /*  props:{
      name:String,
      address:String
  },*/
// 接受数据同时对数据进行类型的限制+默认值的认定+必要性的限制
  props:{
    name:{
      type:String,
      required:true
    },
    address: {
      type:String,
      default:'北京'
    }
  }
}
</script>

<style scoped>

</style>