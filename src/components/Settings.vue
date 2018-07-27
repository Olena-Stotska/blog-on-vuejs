<template>
  <div class="container">
    <h1>Settings</h1>
    <div class="heading-title">
      <h2>Email settings</h2>
    </div>
    <div class="title">Your email</div>
    <div class="change-block">
      <div class="user-email">
        <input class="email" type="email" :value="currentUser.email" :disabled="isDicabled">
      </div>
      <div v-if="!isEdit" class="edit-block">
        <button class="btn-edit">Edit email</button>
        <div v-if="isEdit">
          <button class="btn-save">Save</button>
          <button class="btn-cansel">Cansel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Settings',
  data: () => ({
    isDicabled: true,
    isEdit: false
  }),
  computed: {
    ...mapGetters(['currentUser'])
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.container {
  max-width: 70%;
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

.btn-edit {
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
</style>
