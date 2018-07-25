<template>
  <footer class="footer">
    <h2>Responses</h2>
    <div class="comments-block">
      <UserInitials />
      <textarea class="input-comment" @keyup.ctrl.enter="addNewComment" v-model.trim="newComment" placeholder="Add comment to this  story...">
      </textarea>
      <div class="output-comments"></div>
    </div>
  </footer>
</template>

<script>
import UserInitials from './UserInitials'
import { mapGetters } from 'vuex'
import Vue from 'vue'

export default {
  name: 'Comments',
  components: {
    UserInitials
  },
  data: () => ({
    newComment: '',
    post: null,
  }),
  computed: {
    ...mapGetters(['getPostById'])
  },
  watch: {
    $route: {
      immediate: true,
      handler(value) {
        const article = this.getPostById(Number(value.params.id))

        if (article === undefined) {
          return
        }

        this.post = article
      }
    }
  },
  methods: {
    addNewComment() {
      if (!this.post.comments) {
        Vue.set(this.post, 'comments', [])
      }

      if (this.newComment.length === 0) {
        return
      }

      this.post.comments.unshift({
        newComment: this.newComment,
        user: this.post.userName,
        date: new Date().toDateString()
      })

      this.newComment = ''
    }
  },
  created() {
    console.log(this.post)
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.footer {
  margin-top: 50px;
  text-align: center;
  padding: 40px 10% 100px 10%;
  background-color: lighten(map-get($colors, bg), 17.5%);
}

.comments-block {
  display: flex;
  align-items: center;
  justify-content: center;

  .input-comment {
    min-width: 60%;
    max-width: 60%;
    min-height: 90px;
    max-height: 90px;
    line-height: 2rem;
    margin-left: 20px;
    padding: 10px 15px;
    font-size: 1.2rem;
    border-radius: 4px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, .09);
    box-shadow: 0 1px 4px rgba(0, 0, 0, .09);
    transition: all 0.5s;
    &::placeholder {
      line-height: 5rem;
      padding-left: 20px;
      color: map-get($colors, primary);
    }

    &:focus {
      min-height: 150px;
      max-height: auto;
      border: 1px solid rgba(0, 0, 0, .1);
      box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
      &::placeholder {
        line-height: 2rem;
        padding-left: 0;
        color: lighten(map-get($colors, primary), 60%);
      }
    }
  }
}
</style>
