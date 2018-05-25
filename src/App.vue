<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="handleEventEmit">events emit</button>
    <button @click="handleBusEmit">bus emit</button>
    <router-view/>
    <!-- <Test propMessage="dzn"></Test> -->
    <!-- <video id="video" controls></video> -->
  </div>
</template>

<script>
import dzntest from 'dzntest'
import Axios from 'axios'
import Events from './events'
import Bus from './bus'
// import Test from './components/Test'
console.log(dzntest) // dzn
export default {
  components: {
    // Test
  },
  mounted: async () => {
    // Axios.get('test').then(res => {
    //   console.log(res)
    // })
    const res = await Axios.get('test')
    console.log(res)
    Events.on('onTest', (text) => {

    })
    Bus.$on('onTest', (test) => {

    })
    var video = document.querySelector('video')
    if (!video) return
    var assetURL =
      'static/backgrounp.mp4'
    var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'

    if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
      var mediaSource = new MediaSource()
      video.src = URL.createObjectURL(mediaSource)
      // mediaSource.addEventListener('sourceopen', sourceOpen)
    } else {
      console.error('Unsupported MIME type or codec: ', mimeCodec)
    }

    function sourceOpen(_) {
      const _this = this
      const sourceBuffer = _this.addSourceBuffer(mimeCodec)
      fetchAB(assetURL, function(buf) {
        sourceBuffer.addEventListener('updateend', function(_) {
          if (_this.readyState === 'open') _this.endOfStream()
          video.play()
        })
        sourceBuffer.appendBuffer(buf)
      })
    }

    function fetchAB(url, cb) {
      console.log(url)
      var xhr = new XMLHttpRequest()
      xhr.open('get', url)
      xhr.responseType = 'arraybuffer'
      xhr.onload = function() {
        cb(xhr.response)
      }
      xhr.send()
    }
  },
  methods: {
    handleEventEmit() {
      Events.emit('onTest', 'dzn')
    },
    handleBusEmit() {
      Bus.$emit('onTest', 'dzn')
    }
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
