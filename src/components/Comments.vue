<template>
  <div>
    <h2>Responses</h2>
    <div class="comments-block">
      <UserInitials :userId="currentUser.id" />
      <textarea class="input-comment" @keyup.ctrl.enter="addComment" v-model.trim="newComment" placeholder="Add comment to this  story...">
      </textarea>
    </div>
    <div class="output-comments" v-for="(comment, index) in post.comments" :key="index">
      <div class="user-details">
        <UserInitials :userId="comment.userId" />
        <div class="details">
          <p>{{ findUserById(comment.userId).name }}</p>
          <p>{{ comment.date }}</p>
        </div>
      </div>
      <div class="text">{{ comment.text }}</div>
    </div>
  </div>
</template>

<script>
import UserInitials from './UserInitials'
import { mapGetters, mapActions } from 'vuex'

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
    ...mapGetters(['currentUser', 'findUserById'])
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
          userId: this.currentUser.id
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

.output-comments {
  max-width: 90%;
  margin: 0 auto;
  margin-top: 50px;
  padding: 20px 30px;
  text-align: left;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.09);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.09);

  .user-details {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .details {
    margin-left: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    color: map-get($colors, primary);

    p {
      margin: 0;
    }
  }

  .text {
    margin-top: 20px;
    font-weight: 500;
    color: map-get($colors, dark);
  }
}
</style>
