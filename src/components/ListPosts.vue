<template>
  <div class="container">
    <div class="header">
      <h1>Your Stories</h1>
      <router-link tag="button" :to="{ name: 'newPost' }">Write a story</router-link>
    </div>

    <div class="tabs">
      <ul>
        <li><router-link :to="{ name: 'drafts' }">Drafts</router-link></li>
        <li><router-link :to="{ name: 'public' }">Published</router-link></li>
      </ul>
    </div>
    <div class="content-list">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListPosts'
}
</script>

<style scoped lang="scss">
@import '../styles/variables.scss';

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tabs {

  ul {
    display: flex;
    border-bottom: 1px solid map-get($colors, border);
  }

  li {
    margin: 20px 20px 10px 0;
  }

  a {
    font-size: 1.2rem;
    font-weight: 500;
    padding: 10px;
    color: map-get($colors, primary);

    &.router-link-active,
     .router-link-exact-active {
      color: map-get($colors, secondary);
      border-bottom: 2px solid map-get($colors, secondary);
    }
  }
}
</style>
