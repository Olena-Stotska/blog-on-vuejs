<template>
  <div>
    <ListArticles :articles="draftsByUserId" />
    <div v-show="!draftsByUserId.length" class="empty-list">You haven't any drafts yet.</div>
  </div>
</template>

<script>
import ListArticles from './ListArticles'

import { mapGetters } from 'vuex'

export default {
  name: 'ListDrafts',
  components: {
    ListArticles
  },
  computed: {
    ...mapGetters(['draftsByUserId'])
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
