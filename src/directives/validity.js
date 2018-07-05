import Vue from 'vue'

Vue.directive('validity', {
  bind(el, binding, vnode) {
    const listener = (event) => {
      if (event.type === 'invalid') {
        event.preventDefault()
      }

      const value = el.validity.valid
      vnode.context.$data[binding.expression] = value
    }

    el.__listener = listener
    el.addEventListener('invalid', listener)
    el.addEventListener('input', listener)
  },
  update(el, binding) {
    if (!binding.value && el.validity.valid) {
      el.setCustomValidity('Invalid')
    } else if (binding.value) {
      el.setCustomValidity('')
    }
  },
  unbind(el) {
    el.removeEventListener('invalid', el.__listener)
    el.removeEventListener('input', el.__listener)
  }
})
