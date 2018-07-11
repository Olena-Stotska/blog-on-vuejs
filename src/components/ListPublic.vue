<template>
  <div>
    <article v-for="post in posts" :key="post.id">
      <h2 class="title-post">{{ post.title }}</h2>
      <div class="description">{{ post.description }}</div>
    </article>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ListPublic',
  computed: {
    ...mapGetters(['posts']),
  },
}
</script>

<style scoped lang="scss">

</style>
