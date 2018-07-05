<template>
  <transition name="modal">
    <div class="modal-mask">
      <div @click.self="$emit('close')" class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'ModalSingIn'
  }
</script>

<style scoped lang="scss">
@import '@/styles/modal-style.scss';

</style>
