<template>
  <div class="container">
    <h1>Settings</h1>
    <div class="heading-title">
      <h2>Email settings</h2>
    </div>
    <div class="title">Your email</div>
    <div class="change-block">
      <div class="user-email">
        <input class="email" type="email" v-focus="isEdit" v-model.trim="email" :disabled="!isEdit">
      </div>
      <div class="edit-block">
        <button type="button" class="btn-edit" v-if="!isEdit" @click="editEmail">Edit email</button>
        <template v-if="isEdit">
          <button type="button" class="btn-save" @click="saveEmail">Save</button>
          <button type="button" class="btn-cancel" @click="cancelEdit">Cancel</button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Settings',
  data: () => ({
    isEdit: false,
    email: ''
  }),
  computed: {
    ...mapGetters(['currentUser']),
  },

  watch: {
    currentUser: {
      immediate: true,
      handler(user) {
        if (user) {
          this.email = user.email
        }
      }
    }
  },

  methods: {
    ...mapActions(['updateEmail']),

    editEmail() {
      this.isEdit = true
    },

    cancelEdit() {
      this.isEdit = false
      this.email = this.currentUser.email
    },

    saveEmail() {
      return this.updateEmail(this.email)
        .then(() => this.isEdit = false)
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.container {
  max-width: 90%;
  margin: 0 auto;
  text-align: left;

  h1 {
    font-size: 3rem;
    margin-bottom: 50px;
  }
}

.heading-title {
  margin-bottom: 50px;
  border-bottom: 1px solid grey;

  h2 {
    font-size: 2rem;
    margin-bottom: 5px;
  }
}

.title {
  font-size: 1.6rem;
  font-weight: 500;
}

.user-email {
  .email {
    display: block;
    margin-top: 5px;
    font-size: 1.1rem;
    padding: 5px;
    border: none;
    outline: none;
    letter-spacing: 0;
  }
}

.edit-block {
  button {
    font-size: 1rem;
  }
}

.btn-edit,
.btn-cancel {
  margin-left: 10px;
  color: map-get($colors, primary);
  border-color: map-get($colors, primary);

  &:hover {
    color: map-get($colors, primary-hover);
  }
}

.change-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media(min-width: #{map-get($breakpoints, small)}) {
  .container {
    max-width: 70%;
  }
}

@media(min-width: #{map-get($breakpoints, medium)}) {
  .container {
    max-width: 40%;
  }
}
</style>
