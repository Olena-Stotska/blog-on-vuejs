<template>
  <form @submit="formSubmited">
    <label class="form-group">
      <div class="title-input">
        <div><span class="star-required">*</span>Full Name:</div>
        <transition name="fadeRight"><div class="validation" v-if="!isValidName">Name is required!</div></transition>
      </div>
      <input v-model.trim="name" v-validity="isValidName" required/>
    </label>

    <label class="form-group">
      <div class="title-input">
        <div><span class="star-required">*</span>Phone:</div>
        <transition name="fadeRight"><div class="validation" v-if="!isValidPhone">Phone is required!</div></transition>
      </div>
      <input type="number" v-model.trim="phone" v-validity="isValidPhone" required/>
    </label>

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
        <transition name="fadeRight"><div class="validation" v-if="!isValidPassword">Min 6 charts</div></transition>
      </div>
      <input type="password" v-model.trim="password" v-validity="isValidPassword" minlength="6" required @input="validatePasswordEquality"/>
    </label>

    <label class="form-group">
      <div class="title-input">
        <div><span class="star-required">*</span>Password confirmation:</div>
        <transition name="fadeRight"><div class="validation" v-if="!isValidPasswordConf">Not corect!</div></transition>
      </div>
      <input type="password" v-model.trim="passwordConf" v-validity="isValidPasswordConf" @input="validatePasswordEquality"/>
    </label>

    <transition name="fadeUp"><div v-show="errorMessage" class="error-msg">{{ errorMessage }}</div></transition>

    <button class="btn-sent">Send</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'GetStarted',
  data: () => ({
    name: '',
    phone: '',
    email: '',
    password: '',
    passwordConf: '',
    errorMessage: '',
    isValidName: true,
    isValidEmail: true,
    isValidPhone: true,
    isValidPassword: true,
    isValidPasswordConf: true
  }),
  methods: {
    ...mapActions(['addUser', 'loginUser']),

    validatePasswordEquality() {
      this.isValidPasswordConf = this.password === this.passwordConf
    },

    formSubmited() {
      this.addUser({
        name: this.name,
        phone: this.phone,
        email: this.email,
        password: this.password,
      }).then(() => {
        return this.loginUser({
          email: this.email,
          password: this.password
        })
      }).then(() => {
        this.name = this.phone = this.email = this.password = this.passwordConf = ''
        this.$emit('registered')
      }).catch((error) => this.errorMessage = error.message)
    },
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/form-style.scss';

</style>
