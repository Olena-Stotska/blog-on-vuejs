<template>
  <div>
    <ListArticles :articles="postsByUserId" />
    <div v-show="!postsByUserId.length" class="empty-list">You haven’t published any public stories yet.</div>
  </div>
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
    ...mapGetters(['postsByUserId'])
  }
}
</script>

<style scoped lang="scss">
.empty-list {
  text-align: center;
  margin-top: 10%;
  font-weight: 700;
  font-size: 1.5rem;
}
</style>
