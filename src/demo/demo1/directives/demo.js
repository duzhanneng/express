export default {
  bind(el, binding, vnode) {
    const { value } = binding
    Object.keys(value).forEach(key => (el.style[key] = value[key]))
  }
}
