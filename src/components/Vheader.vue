<template>
  <div class="header">
    <span>头部</span>
  </div>
    
</template>

<script>
export default {
  name: 'Vheader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
.header{
  height: 10vh;
  background: pink;
  span{
    font-size: 30px;
  }
}

</style>
