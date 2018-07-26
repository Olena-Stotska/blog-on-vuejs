<template>
  <div class="similar-block">
    <div class="col" v-for="post in  getSimilarPosts(post.tags, post.id)" :key="post.id">
       <router-link :to="{ name: 'home', params: { id: post.id } }" tag="div" >
          <div class="img-block" v-if="post.image">
            <img :src="post.image" alt="Image Post">
          </div>
          <div class="also">
            Also tagged:
            <span v-for="tag in post.tags" :key="tag">
              {{ tag }}
            </span>
          </div>
          <h2>{{ post.title }}</h2>
          <div class="details">
            <UserInitials :userId="post.userId" />
            <div>
              <div class="author">{{ post.userName }}</div>
              <div class="date">{{ post.date }}</div>
            </div>
          </div>
        </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserInitials from './UserInitials'

export default {
  name: 'SimilarArticles',
  props: ['post'],
  components: {
    UserInitials
  },
  computed: {
    ...mapGetters(['getSimilarPosts']),
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.similar-block {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 50px;
}

.col {
  width: 30%;
  margin-right: 20px;
  cursor: pointer;
  text-align: left;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.09);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.09);

  .img-block {
    max-height: 100px;
    min-height: 100px;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.09);

    img {
      width: 100%;
      min-height: 100%;
    }
  }

  .also {
    padding: 20px 5px 0 10px;
    font-size: 0.9rem;
    color: map-get($colors, bg);
  }

  h2 {
    font-size: 1.3rem;
    padding-left: 10px;
    margin-top: 5px;
  }

  .also,
  h2 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .details {
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .user-logo{
      margin-right: 10px;
    }

    .date {
      padding-top: 5px;
      font-size: 0.9rem;
      color: map-get($colors, primary);
    }
  }
}
</style>
