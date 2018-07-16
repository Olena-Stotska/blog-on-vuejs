<template>
  <div>
    <nav class="nav-bar">
      <div class="tags controls">
        <ul class="breadcrumbs">
          <li class="filter"><a href="#">Home</a></li>
          <li class="filter"><a href="#">Tech</a></li>
          <li class="filter"><a href="#">Politics</a></li>
          <li class="filter"><a href="#">Culture</a></li>
        </ul>
      </div>
    </nav>

    <main>
      <div class="flex-grid">
        <div class="container-post" v-for="post in posts" :key="post.id">
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
      </div>
    </main>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['posts'])
  }
}
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";

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
    text-transform: uppercase;
    color: map-get($colors, primary);

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


