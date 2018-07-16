<template>
  <div>
    <nav class="nav-bar">
      <div class="tags controls">
        <ul class="breadcrumbs">
          <li class="filter" :class="{ active: isFiltered('home') }" @click="filter('home')">Home</li>
          <li class="filter" :class="{ active: isFiltered('tech') }" @click="filter('tech')">Tech</li>
          <li class="filter" :class="{ active: isFiltered('politics') }" @click="filter('politics')">Politics</li>
          <li class="filter" :class="{ active: isFiltered('culture') }" @click="filter('culture')">Culture</li>
        </ul>
      </div>
    </nav>

    <main>
      <transition-group name="filter" tag="div" class="flex-grid">
        <div class="container-post" v-for="post in filteredPosts" :key="post.id">
          <router-link :to="{ name: 'home' }" tag="div" class="col">
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
  </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  data: () => ({
    currentFilter: 'home'
  }),
  computed: {
    ...mapGetters(['posts']),

    filteredPosts() {
      if (this.currentFilter === 'home') {
        return this.posts
      }

      return  this.posts.filter(post => post.topic === this.currentFilter)
    }
  },

  methods: {
    isFiltered(name) {
      return this.currentFilter === name
    },

    filter(name) {
      this.currentFilter = name
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

    &.active {
      color: map-get($colors, dark);
      text-shadow: 0px 1px 1px map-get($colors, primary);
    }

    &:first-child {
      margin-left: 0;
    }
  }
}

.flex-grid {
  display: block;
}

.col {
  width: 100%;
  padding: 0 10px;
  margin: 0 0 20px 0;

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
  .breadcrumbs {
    li {
      margin-left: 24px;
    }
  }

  .container-post {
    width: 70%;
    margin: 0 auto;
  }

  .col {
    width: 100%;
    margin: 0 auto 40px auto;

    .img-block {
      img {
        width: 30%
      }
    }
  }
}
</style>


