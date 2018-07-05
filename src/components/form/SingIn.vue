<template>
  <form>
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
        <transition name="fadeRight"><div class="validation" v-if="!isValidPassword">Password is required!</div></transition>
      </div>
      <input type="password" v-model="password" v-validity="isValidPassword" minlength="6" required/>
    </label>

    <button class="btn-sent">Send</button>
  </form>
</template>

<script>
  export default {
    name: 'SingIn',
    data: () => ({
      email: '',
      password: '',
      isValidEmail: true,
      isValidPassword: true
    })
  }
</script>

<style scoped lang="scss">
@import '@/styles/form-style.scss';

</style>
