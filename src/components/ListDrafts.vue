<template>
  <ListArticles :articles="drafts" />

  <!-- <div>
    <article v-for="draft in drafts" :key="draft.id">
      <div class="post">
        <h2 class="title-post" :title="titleEdit">{{ draft.title }}</h2>
        <div class="description">{{ draft.description }}</div>
      </div>
       <div @click="selectedPost = draft" class="btn-delete-post" :title="titleDelete">
        <i class="icon-trash"></i>
      </div>
    </article>
    <ConfirmationDialog v-if="selectedPost" @cancel="selectedPost = null" @confirm="deleteDraft(selectedPost)" />
  </div> -->
</template>

<script>
import ListArticles from './ListArticles'

// import ConfirmationDialog from './ConfirmationDialog'

import { mapGetters } from 'vuex'

export default {
  name: 'ListDrafts',
  components: {
    ListArticles
  },
  // components: {
  //   ConfirmationDialog
  // },
  // data: () => ({
  //   selectedPost: null,
  //   titleDelete: "Delete story",
  //   titleEdit: "Edit story"
  // }),
  computed: {
    ...mapGetters(['drafts']),
  },
  // methods: {
  //   ...mapActions(['deletePost']),

  //   deleteDraft(draft) {
  //     this.deletePost(draft)
  //     this.selectedPost = null
  //   }
  // }
}
</script>

<!-- <style scoped lang="scss">
@import '@/styles/post-style.scss';
</style> -->
