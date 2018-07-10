<template>
  <div>
    <article v-for="draft in drafts" :key="draft.id">
      <h2 class="title-post">{{ draft.title }}</h2>
      <div class="description">{{ draft.description }}</div>
    </article>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ListDrafts',
  computed: {
    ...mapGetters(['drafts']),
  }
}
</script>

<style scoped lang="scss">

</style>
