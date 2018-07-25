<template>
  <div>
    <h2>Responses</h2>
    <div class="comments-block">
      <UserInitials />
      <textarea class="input-comment" @keyup.ctrl.enter="addComment" v-model.trim="newComment" placeholder="Add comment to this  story...">
      </textarea>
    </div>
    <div class="output-comments" v-for="(comment, index) in post.comments" :key="index">
      <div>
        {{comment}}
      </div>
    </div>
  </div>
</template>

<script>
import UserInitials from './UserInitials'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Comments',
  components: {
    UserInitials
  },
  props: ['post'],
  data: () => ({
    newComment: '',
  }),
  computed: {
    ...mapGetters(['currentUser'])
  },
  methods: {
    ...mapActions(['addNewComment']),

    addComment() {
      if (this.newComment.length === 0) {
        return
      }

      this.addNewComment({
        post: this.post,
        comment: {
          text: this.newComment,
          userId: this.currentUser.name
        }
      })

      this.newComment = ''
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

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
      height: auto;
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
