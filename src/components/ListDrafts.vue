<template>
  <ListArticles :articles="drafts" />
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
    ...mapGetters(['drafts']),
  }
}
</script>
