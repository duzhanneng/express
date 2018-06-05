<template>
  <div id="app">
    <img src="~@assets/img/logo.png">
    <br>
    <button @click="isShowModal = true">open modal</button>
    <Modal v-model="isShowModal" @onClose="isShowModal = false"></Modal>
    <p>路由demo</p>
    <a @click="$router.push('/page1')">page1</a>
    <a @click="$router.push('/page2')">page2</a>
    <router-view/>
    <p>{{mixinDemo}}</p>
    <p>{{'1234567890' | filterDemo}}</p>
    <p v-demo="{color: 'red'}">directive demo</p>
    <p>{{test}}</p>
    <p>{{name}}</p>
  </div>
</template>

<script>
import Modal from 'COMPONENTS/Modal'
import { mapState } from 'vuex'
import { apiDemo1 } from '@services/test'
import mixinDemo from '@mixins/demo'

console.log($)
export default {
  mixins: [mixinDemo],
  components: {
    Modal
  },
  computed: {
    ...mapState(['test']),
    ...mapState('a', ['name'])
  },
  data: () => ({
    isShowModal: false
  }),
  async mounted() {
    const res = await apiDemo1()
    console.log(res)
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>
