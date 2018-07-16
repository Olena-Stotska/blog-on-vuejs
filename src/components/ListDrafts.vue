<template>
  <div>
    <ListArticles :articles="getDraftsByUserId" />
    <div v-show="!noArticles" class="empty-list">You haven't any drafts yet.</div>
  </div>
</template>

<script>
import ListArticles from './ListArticles'

import { mapGetters } from 'vuex'

export default {
  name: 'ListDrafts',
  data: () => ({
    emptyDrafts: false
  }),
  components: {
    ListArticles
  },
  computed: {
    ...mapGetters(['getDraftsByUserId']),

    emptyArticles() {
      if (this.getDraftsByUserId.length === 0) {
        this.emptyDrafts = true
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
