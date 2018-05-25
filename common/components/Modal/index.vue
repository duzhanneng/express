<template>
  <div class="modal">
    <div class="modal-mask" v-show="value"></div>
    <transition name="common-scale">
      <div class="modal-dialog" v-if="value">
        <div class="modal-content" :style="{'width': width}">
          <div class="modal-title">
            <slot name="modal-title"></slot>
          </div>
          <div class="modal-body">
            <slot name="modal-body"></slot>
          </div>
          <div class="modal-footer">
            <slot name="modal-footer"></slot>
          </div>
          <button @click="$emit('onClose')">close</button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  mixins: [],
  props: {
    value: {
      type: Boolean,
      require: true
    },
    width: {
      type: String,
      default: '50%'
    },
    modalClass: String
  },
  data: () => ({}),
  watch: {},
  methods: {}
}
</script>
<style lang='scss' scoped>
.modal-mask,
.modal-dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
  transition: all .3s;
}
.modal-mask {
  background-color: rgba(55, 55, 55, 0.6);
}
.modal-content {
  position: relative;
  min-height: 50%;
  background: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
