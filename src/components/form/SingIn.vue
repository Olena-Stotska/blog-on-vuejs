<template>
  <form @submit="singIn">
    <label class="form-group">
      <div class="title-input">
        <div><span class="star-required">*</span>E-mail:</div>
        <transition name="fadeRight"><div class="validation" v-if="!isValidEmail">E-mail is required!</div></transition>
      </div>
      <input type="email" v-model.trim="email" v-validity="isValidEmail" required/>
    </label>

    <label class="form-group">
      <div class="title-input">
        <div><span class="star-required">*</span>Password:</div>
        <transition name="fadeRight"><div class="validation" v-if="!isValidPassword">Password is required!</div></transition>
      </div>
      <input type="password" v-model.trim="password" v-validity="isValidPassword" minlength="6" required/>
    </label>

    <div>{{ errorMessage }}</div>

    <button class="btn-sent">Send</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SingIn',

  data: () => ({
    email: '',
    password: '',
    errorMessage: '',
    isValidEmail: true,
    isValidPassword: true
  }),

  methods: {
    ...mapActions(['loginUser']),

    singIn() {
      this.loginUser({
        email: this.email,
        password: this.password
      }).then(() => {
        this.email = this.password = ''
        this.$emit('login')
      }).catch((error) => {
        this.errorMessage = error.message
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/form-style.scss';

</style>
