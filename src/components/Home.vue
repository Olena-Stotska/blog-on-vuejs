<template>
  <nav class="nav-bar">
    <div class="metabar">
      <span>similar of <a href="https://medium.com/">Midium</a></span>
      <h1 class="name">Blog</h1>
      <FormRegistration />
      <UserProfile v-if="isLogged" />
    </div>

    <div class="tags controls">
      <ul class="breadcrumbs">
        <li class="filter"><a href="#">Home</a></li>
        <li class="filter"><a href="#">Tech</a></li>
        <li class="filter"><a href="#">Politics</a></li>
        <li class="filter"><a href="#">Culture</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import FormRegistration from './FormRegistration'
import UserProfile from './UserProfile'

import { mapState } from 'vuex'

  export default {
    name: 'Home',
    components: {
      FormRegistration,
      UserProfile,
    },
    computed: {
      ...mapState(['isLogged'])
    }
  }
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";

.metabar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
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

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  }
}

.breadcrumbs {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    list-style-type: none;
    margin-left: 15px;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: map-get($colors, primary);

    &:first-child {
      margin-left: 0;
    }
  }
}

@media(min-width: #{map-get($breakpoints, small)}) {
  .metabar {
    span {
      display: block;
    }
  }

  .breadcrumbs {
    li {
      margin-left: 24px;
    }
  }
}
</style>
