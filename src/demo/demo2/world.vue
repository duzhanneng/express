<template>
  <div id="app">
    <img src="@assets/logo.png">
    <p>world</p>
    <router-view/>
    <button @click="$router.push('/test')">click</button>
  </div>
</template>

<script>
import { testApi } from '@services/test'

console.log($)
export default {
  name: 'App',
  components: {},
  async mounted() {
    const res = await testApi()
    console.log(res)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
