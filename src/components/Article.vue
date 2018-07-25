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

    <Applause :post="post" />

    <footer class="footer">
      <Comments v-if="this.$store.state.isLogged" :post="post" />
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Applause from './Applause'
import Comments from './Comments'

export default {
  name: 'Article',
  components: {
    Applause,
    Comments
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

.footer {
  margin-top: 50px;
  text-align: center;
  padding: 40px 20px 70px 20px;
  background-color: lighten(map-get($colors, bg), 17.5%);
}

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
  .footer {
    padding: 40px 10% 70px 10%;
  }

  .container-post {
    margin: 0 10%;

    .content,
    .description {
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
  }
}

@media(min-width: #{map-get($breakpoints, medium)}) {
  .container-post {
    display: flex;
    flex-direction: column;

    .title {
      font-size: 4rem;
    }

    .description {
      font-size: 2rem;
    }

    .title,
    .description {
      text-align: center;
    }

    img {
      max-width: 80%;
      margin: 0 auto;
    }
  }
}
</style>
