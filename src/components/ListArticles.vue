<template>
  <div>
    <article v-for="article in articles" :key="article.id">
      <router-link tag="div" class="post" :to="{ name: 'editPost', params: { id: article.id } }">
        <h2 class="title-post" :title="titleEdit">{{ article.title }}</h2>
        <div class="date">{{ article.date }}</div>
      </router-link>
       <div @click="selectedPost = article" class="btn-delete-post" :title="titleDelete">
        <i class="icon-trash"></i>
      </div>
    </article>
    <ConfirmationDialog v-if="selectedPost" @cancel="selectedPost = null" @confirm="deleteDraft(selectedPost)" />
  </div>
</template>

<script>
import ConfirmationDialog from './ConfirmationDialog'

import { mapActions } from 'vuex'

export default {
  name: 'ListArticles',
  props: ['articles'],
  components: {
    ConfirmationDialog
  },
  data: () => ({
    selectedPost: null,
    titleDelete: "Delete story",
    titleEdit: "Edit story"
  }),
  methods: {
    ...mapActions(['deletePost']),

    deleteDraft(article) {
      this.deletePost(article)
      this.selectedPost = null
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/post-style.scss';
</style>
