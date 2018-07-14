<template>
  <div>
    <nav class="nav-bar">
      <div class="tags controls">
        <ul class="breadcrumbs">
          <li class="filter"><a href="#">Home</a></li>
          <li class="filter"><a href="#">Tech</a></li>
          <li class="filter"><a href="#">Politics</a></li>
          <li class="filter"><a href="#">Culture</a></li>
        </ul>
      </div>
    </nav>

    <main>
      <div v-for="post in posts">
        <h1>{{ post.title }}</h1>
        <p>{{ post.description }}</p>
      </div>
    </main>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['posts'])
  }
}
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";


.breadcrumbs {
  display: flex;
  justify-content: center;
  align-items: center;

  li {
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
  .breadcrumbs {
    li {
      margin-left: 24px;
    }
  }
}
</style>
