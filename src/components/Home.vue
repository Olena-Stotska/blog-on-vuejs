<template>
  <div>
    <Article v-if="isArticle" />
    <template v-else>
      <nav class="nav-bar">
        <div class="tags controls">
          <ul class="breadcrumbs">
            <router-link tag="li" class="filter" :to="{ name: 'home' }">Home</router-link>
            <router-link tag="li" class="filter" :to="{ name: 'home', params: { id: 'tech' } }">Tech</router-link>
            <router-link tag="li" class="filter" :to="{ name: 'home', params: { id: 'politics' } }">Politics</router-link>
            <router-link tag="li" class="filter" :to="{ name: 'home', params: { id: 'culture' } }">Culture</router-link>
          </ul>
        </div>
      </nav>

      <main>
        <transition-group name="filter" tag="div" class="grid">
          <div class="container-post" v-for="post in filteredPosts" :key="post.id">
            <router-link :to="{ name: 'home', params: { id: post.id } }" tag="div" class="col">
              <div class="img-block" v-if="post.image">
                <img :src="post.image" alt="Image Post">
              </div>
              <h2>{{ post.title }}</h2>
              <p>{{ post.description }}</p>
              <div class="details">
                <div class="author">{{ post.userName }}</div>
                <div class="date">{{ post.date }}</div>
              </div>
            </router-link>
          </div>
        </transition-group>
      </main>
    </template>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import Article from './Article'

export default {
  name: 'Home',
  components: {
    Article
  },
  computed: {
    ...mapGetters(['posts']),

    isArticle() {
      return !isNaN(this.$route.params.id)
    },

    currentTopic() {
      return this.$route.params.id || 'home'
    },

    filteredPosts() {
      if (this.currentTopic === 'home') {
        return this.posts
      }

      return  this.posts.filter(post => post.topic === this.currentTopic)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";

.filter-enter-active,
.filter-leave-active,
.filter-move {
  transition: all 1s;
}
.filter-enter,
.filter-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.filter-leave-active {
  position: absolute;
}

.nav-bar {
  margin-bottom: 40px;
}

.breadcrumbs {
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin-left: 15px;
    font-size: 1.2rem;
    cursor: pointer;
    text-transform: uppercase;
    color: map-get($colors, primary);

    &.router-link-exact-active {
      color: map-get($colors, dark);
      text-shadow: 0px 1px 1px map-get($colors, primary);
    }

    &:first-child {
      margin-left: 0;
    }
  }
}

.grid {
  display: block;
}

.col {
  width: 100%;
  padding: 0 10px;
  margin-bottom: 30px;
  cursor: pointer;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0;
  }

  .img-block {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 80%;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .details {
    .date {
      padding-top: 5px;
      font-size: 0.9rem;
      color: map-get($colors, primary);
    }
  }
}

@media(min-width: #{map-get($breakpoints, small)}) {
  main {
    padding: 0 50px;
  }

  .breadcrumbs {
    li {
      margin-left: 24px;
    }
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
  }

  .container-post {
    width: 45%;
    margin: 10px auto;
    flex: 1;
  }

  .col {
    width: 100%;
    margin: 0 auto 40px auto;

    .img-block {
      justify-content: flex-start;

      img {
        width: 30%
      }
    }

    p {
      width: 70%;
    }
  }
}
</style>


