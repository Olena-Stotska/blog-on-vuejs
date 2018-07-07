<template>
  <transition name="modal">
    <div class="modal-mask">
      <div @click.self="$emit('close')" class="modal-wrapper">

        <div class="modal-container">
          <h1>Join Blog.</h1>
          <h2>
            Create an account to personalize your homepage, follow your favorite
            authors and publications, applaud stories you love, and more.
          </h2>
          <button class="btn-close" @click="$emit('close')"></button>
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
    name: 'ModalGetStarted'
  }
</script>

<style scoped lang="scss">
@import '@/styles/modal-style.scss';
</style>
