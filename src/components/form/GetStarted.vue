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
@import "../../styles/variables.scss";

$bg-contact: map-get($colors, dark) !default;

.errors-block {
    color: #f12b2b;
  }

.btn-sent {
  color: #03a87c;
  line-height: 2rem;
  padding: 0 15px;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  float: right;
  background-color: #fff;
  opacity: 0.6;
  border: 1px solid map-get($colors, secondary);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.6);
  transition: all 0.5s;

  &:active {
    box-shadow: none;
  }

  &:focus {
    outline: none;
  }
}

form {
  padding: 0 10px;
}

.form-group {
  display: block;
  margin-bottom: 15px;

  .star-required {
    font-weight: 700;
    font-size: 1.2rem;
    color: map-get($colors, secondary);
  }

  .title-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .validation {
    color: map-get($colors, error);
    animation-duration: 0.5s;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    border: 1px solid #fff;
    line-height: 2rem;
    text-indent: 1rem;
    font-size: 1.2rem;
    outline: none;
    background-color: #fff;
    opacity: 0.6;
  }
}

.fadeRight-enter,
.fadeRight-enter-to {
  animation: fadeInRight 0.6s;
}

.fadeRight-move {
  transition: transform 1s;
}

.fadeRight-leave,
.fadeRight-leave-to {
  animation: fadeOutRight 0.6s;
}
</style>
