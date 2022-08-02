<template>
  <div class="container">
    <h2>你好：{{ name }}</h2>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: 'school',
  data() {
    return {
      name: '张张'
    }
  },
}
</script>

<style>
.container {
  background-color: pink;
}
</style>