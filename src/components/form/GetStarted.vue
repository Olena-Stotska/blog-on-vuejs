<template>
  <form @submit="formSubmited">
    <label class="form-group">
      <div class="title-input">
        <div><span class="star-required">*</span>Full Name:</div>
        <transition name="fadeRight"><div class="validation" v-if="!isValidName">Name is required!</div></transition>
      </div>
      <input v-model="name" v-validity="isValidName" required/>
    </label>

    <label class="form-group">
      <div class="title-input">
        <div><span class="star-required">*</span>Phone:</div>
        <transition name="fadeRight"><div class="validation" v-if="!isValidPhone">Phone is required!</div></transition>
      </div>
      <input type="number" v-model="phone" v-validity="isValidPhone" required/>
    </label>

    <label class="form-group">
      <div class="title-input">
        <div><span class="star-required">*</span>E-mail:</div>
        <transition name="fadeRight"><div class="validation" v-if="!isValidEmail">E-mail is required!</div></transition>
      </div>
      <input type="email" v-model="email" v-validity="isValidEmail" required/>
    </label>

    <label class="form-group">
      <div class="title-input">
        <div><span class="star-required">*</span>Password:</div>
        <transition name="fadeRight"><div class="validation" v-if="!isValidPassword">Min 6 charts</div></transition>
      </div>
      <input type="password" v-model="password" v-validity="isValidPassword" minlength="6" required @input="validatePasswordEquality"/>
    </label>

    <label class="form-group">
      <div class="title-input">
        <div><span class="star-required">*</span>Password confirmation:</div>
        <transition name="fadeRight"><div class="validation" v-if="!isValidPasswordConf">Not corect!</div></transition>
      </div>
      <input type="password" v-model="passwordConf" v-validity="isValidPasswordConf" @input="validatePasswordEquality"/>
    </label>

    <button class="btn-sent">Send</button>
  </form>
</template>

<script>
export default {
  name: 'GetStarted',
  data: () => ({
    name: '',
    phone: '',
    email: '',
    password: '',
    passwordConf: '',
    isValidName: true,
    isValidEmail: true,
    isValidPhone: true,
    isValidPassword: true,
    isValidPasswordConf: true
  }),
  methods: {
    validatePasswordEquality() {
      this.isValidPasswordConf = this.password === this.passwordConf
    },
    formSubmited() {
      setTimeout(() => {
        this.name = this.email = this.message = ''
      }, 100)
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/form-style.scss';

</style>
