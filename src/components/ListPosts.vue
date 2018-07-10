<template>
  <div class="container">
    <h1>Your Stories</h1>

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
  name: 'ListPosts',
  data: () => ({
    message: "To Home"
  })
}
</script>

<style scoped lang="scss">
@import '../styles/variables.scss';

.tabs {

  ul {
    display: flex;
    border-bottom: 1px solid map-get($colors, border);
  }

  li {
    margin: 20px 20px 10px 20px;
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


@media(min-width: #{map-get($breakpoints, small)}) {
  .tabs {
    a {
      font-size: 1.4rem;
    }
  }
}
</style>
