<template>
  <div id="app">
    <div class="metabar">
      <span>similar to <a href="https://medium.com/">Midium</a></span>

      <div :title="message" class="brain-logo">
        <router-link :to="{ name: 'home' }">
          <div class="logo">
            <img src="./assets/img/brain.svg" alt="Logo">
            <h1 class="name">Brainstorm</h1>
          </div>
        </router-link>
      </div>

      <FormRegistration />
      <UserProfile v-if="isLogged" />
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import FormRegistration from './components/FormRegistration'
import UserProfile from './components/UserProfile'

import { mapState } from 'vuex'

export default {
  name: 'App',
  data: () => ({
    message: 'To Home',
  }),
  components: {
    UserProfile,
    FormRegistration
  },
  computed: {
    ...mapState(['isLogged'])
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.logo {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 0;
    font-weight: 700;
    font-size: 2rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  }

  img {
    width: 60px;
    height: 60px;
    margin-right: 10px;
    display: none;
  }
}

.metabar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin: 5px 1%;

  span {
    display: none;
    font-weight: 100;
    font-size: 0.9rem;
    color: map-get($colors, primary);

    a {
      text-decoration: underline;

      &:hover {
        text-decoration: underline;
        color: map-get($colors, primary-hover);
      }
    }
  }
}

@media(min-width: #{map-get($breakpoints, small)}) {
  .logo {
    img {
      display: block;
    }
  }

  .metabar {
    margin-top: 20px;
    padding: 0 20px;

    span {
      display: block;
    }
  }
}
</style>

<style lang="scss">
@import '@/styles/variables.scss';

html, body {
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  color: map-get($colors, dark);
}

* {
  box-sizing: border-box;
}
</style>
