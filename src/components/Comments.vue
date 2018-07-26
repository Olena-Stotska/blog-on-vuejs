<template>
  <div class="container-comments">
    <h3>Responses</h3>
    <div class="comments-block" v-if="!this.$store.state.isLogged">
      <FormRegistration />
    </div>
    <div class="comments-block" v-if="this.$store.state.isLogged">
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
import FormRegistration from './FormRegistration'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Comments',
  components: {
    UserInitials,
    FormRegistration
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
  background-color: #fff;
  min-height: 90px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.09);

  .user-logo {
    display: none;
  }

  .input-comment {
    min-width: 100%;
    min-height: 90px;
    max-height: 90px;
    line-height: 2rem;
    padding: 10px 15px;
    font-size: 1.2rem;
    border-radius: 4px;
    outline: none;
    border: none;
    transition: all 0.5s;
    &::placeholder {
      line-height: 5rem;
      padding-left: 20px;
      color: map-get($colors, primary);
    }

    &:focus {
      min-height: 150px;
      height: auto;
      &::placeholder {
        line-height: 2rem;
        padding-left: 0;
        color: lighten(map-get($colors, primary), 60%);
      }
    }
  }
}

.output-comments {
  margin: 0 auto;
  margin-top: 25px;
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

@media(min-width: #{map-get($breakpoints, small)}) {
  .comments-block {
    .user-logo {
      display: flex;
    }

    .input-comment {
      min-width: 80%;
      max-width: 80%;
      margin-left: 10px;
    }
  }
}

@media(min-width: #{map-get($breakpoints, medium)}) {
  .container-comments {
    width: 80%;
    margin: 0 auto;
  }
}

@media(min-width: #{map-get($breakpoints, large)}) {
  .container-comments {
    width: 60%;
    margin: 0 auto;
  }
}
</style>
