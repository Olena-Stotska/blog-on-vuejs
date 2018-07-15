<template>
  <ListArticles :articles="getPostsByUserId" />
</template>

<script>
import ListArticles from './ListArticles'

import { mapGetters } from 'vuex'

export default {
  name: 'ListPublic',
  components: {
    ListArticles
  },
  computed: {
    ...mapGetters(['getPostsByUserId'])
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/post-style.scss';
</style>
