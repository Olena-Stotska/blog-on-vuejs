<template>
  <div>
    <div class="container">
      <h1 class="title">{{ post.title }}</h1>
      <p class="description">{{ post.description }}</p>
      <img :src="post.image" alt="Post Image">
      <p class="content" v-html="post.content"></p>
      <div class="tags">
        <div class="tag" v-for="tag in post.tags" :key="tag">
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Article',
  data: () => ({
    post: null
  }),
  computed: {
    ...mapGetters(['getPostById'])
  },
  watch: {
    $route: {
      immediate: true,
      handler(value) {
        const article = this.getPostById(value.params.id)

        if (article.length > 0) {
          this.post = article[0]
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.container {
  text-align: left;
  padding: 20px;

  .description {
    font-style: italic;
  }

  img {
    max-width: 100%;
  }

  .content,
  .description {
    font-size: 1.2rem;
    line-height: 2rem;

      h4 {
      font-size: 1.8rem;
    }
  }
}

.tags {
  display: flex;

  .tag {
    padding: 5px 10px;
    margin: 10px 10px 0 0;
    font-size: 1.4rem;
    border-radius: 4px;
    font-weight: 700;
    display: inline-block;
    color: map-get($colors, primary);
    background-color: map-get($colors, border);
  }
}

@media(min-width: #{map-get($breakpoints, small)}) {
  .container {
    margin: 0 5%;

    .content {
      font-size: 1.3rem;
    }
  }
}
</style>
