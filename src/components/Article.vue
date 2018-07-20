<template>
  <div>
    <div class="container-post">
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

    <Applause />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Applause from './Applause'

export default {
  name: 'Article',
  components: {
    Applause
  },
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
        const articleId = Number(value.params.id)
        const article = this.getPostById(articleId)

        this.post = article
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.container-post {
  text-align: left;
  margin: 20px;

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
  }
}

.tags {
  display: flex;

  .tag {
    padding: 5px 10px;
    margin: 10px 10px 0 0;
    font-size: 0.9rem;
    border-radius: 4px;
    font-weight: 700;
    cursor: pointer;
    display: inline-block;
    color: map-get($colors, primary);
    background-color: map-get($colors, border);
    transition: all 0.5s;

    &:hover {
      background-color: map-get($colors, bg);
    }
  }
}

@media(min-width: #{map-get($breakpoints, small)}) {
  .container-post {
    margin: 0 10%;

    .content,
    .description {
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
  }
}
</style>
