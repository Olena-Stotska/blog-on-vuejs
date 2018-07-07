<template>
  <transition name="modal">
    <div class="modal-mask">
      <div @click.self="$emit('close')" class="modal-wrapper">

        <div class="modal-container">
          <h1>Welcome back.</h1>
          <h2>
            Sign in to access your personalized homepage,
            follow authors and topics you love,
            and clap for stories that matter to you.
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
    name: 'ModalSingIn'
  }
</script>

<style scoped lang="scss">
@import '@/styles/modal-style.scss';

</style>
