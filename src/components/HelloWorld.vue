<template>
  <div class="hello" v-finger:single-tap="singleTap" v-finger:swipe="swipe">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">
          Core Docs
        </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">
          Forum
        </a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">
          Community Chat
        </a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">
          vue-router
        </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">
          vuex
        </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">
          vue-loader
        </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">
          awesome-vue
        </a>
      </li>
    </ul>
    <button @click="handleOpen">open</button>
  </div>
</template>

<script>
import Events from '../events'
import Bus from '../bus'
export default {
  data() {
    return {
      msg: 'HelloWorld'
    }
  },
  mounted() {
    Events.on('onTest', text => {
      console.log(text)
    })
    Bus.$on('onTest', text => {
      console.log(text)
    })
    window.addEventListener('storage', function(e) {
      if (e.key === 'message' && e.newValue) {
        console.log(e.newValue)
      }
    })
    var hidden, state, visibilityChange
    if (typeof document.hidden !== 'undefined') {
      hidden = 'hidden'
      visibilityChange = 'visibilitychange'
      state = 'visibilityState'
    } else if (typeof document.mozHidden !== 'undefined') {
      hidden = 'mozHidden'
      visibilityChange = 'mozvisibilitychange'
      state = 'mozVisibilityState'
    } else if (typeof document.msHidden !== 'undefined') {
      hidden = 'msHidden'
      visibilityChange = 'msvisibilitychange'
      state = 'msVisibilityState'
    } else if (typeof document.webkitHidden !== 'undefined') {
      hidden = 'webkitHidden'
      visibilityChange = 'webkitvisibilitychange'
      state = 'webkitVisibilityState'
    }
    document.addEventListener(
      visibilityChange,
      e => {
        console.log(document[hidden])
        console.log(document[state])
      },
      false
    )
  },
  beforeDestroy() {
    console.log('bd')
  },
  methods: {
    singleTap(e, dom) {},
    swipe(e, dom) {},
    handleOpen() {
      this.$router.push('/test')
      // window.open('/test')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
