<template>
  <div id="app">
    <vheader/>
    <router-view/>
    <tabble/>
  </div>
</template>

<script>
import vheader from '@/components/Vheader'
import tabble from '@/components/Vtabble'

export default {
  name: 'App',
  components:{vheader,tabble},
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
