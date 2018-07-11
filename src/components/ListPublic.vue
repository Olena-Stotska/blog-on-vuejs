<template>
  <ListArticles :articles="posts" />

  <!-- <div>
    <article v-for="post in posts" :key="post.id">
      <div class="post">
        <h2 class="title-post" :title="titleEdit">{{ post.title }}</h2>
        <div class="description">{{ post.description }}</div>
      </div>
      <div class="btn-delete-post" :title="titleDelete">
        <i class="icon-trash"></i>
      </div>
    </article>
  </div> -->
</template>

<script>
import ListArticles from './ListArticles'

import { mapGetters } from 'vuex'

export default {
  name: 'ListPublic',
  props: ['articles'],
  components: {
    ListArticles
  },
  // data: () => ({
  //   titleDelete: "Delete story",
  //   titleEdit: "Edit story"
  // }),
  computed: {
    ...mapGetters(['posts']),
  },
}
</script>

<style scoped lang="scss">
@import '@/styles/post-style.scss';
</style>
