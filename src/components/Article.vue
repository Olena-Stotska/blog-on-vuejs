<template>
  <div>
    <div class="container">
      <h1>{{ post.title }}</h1>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Article',
  data: () => ({
    post: null
  }),
  computed: {
    ...mapGetters(['getPostById'])
  },
  watch: {
    $route: {
      immediate: true,
      handler(value) {
        const article = this.getPostById(value.params.id)

        if (article.length > 0) {
          this.post = article[0]
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
