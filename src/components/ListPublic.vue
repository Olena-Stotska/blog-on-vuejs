<template>
  <div>
    <ListArticles :articles="getPostsByUserId" />
    <div v-show="!noArticles" class="empty-list">You haven’t published any public stories yet.</div>
  </div>
</template>

<script>
import ListArticles from './ListArticles'

import { mapGetters } from 'vuex'

export default {
  name: 'ListPublic',
  data: () => ({
    emptyPublic: false,
  }),
  components: {
    ListArticles
  },
  computed: {
    ...mapGetters(['getPostsByUserId']),

    emptyArticles() {
      if (this.getPostsByUserId.length === 0) {
        this.emptyPublic = true
      }
    }
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
