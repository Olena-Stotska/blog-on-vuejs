<template>
  <ListArticles :articles="posts" />
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
    ...mapGetters(['posts'])
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/post-style.scss';
</style>
