<template>
  <div class="comments-block">
    <UserInitials />
    <textarea class="input-comment" @keyup.ctrl.enter="addNewComment" v-model.trim="newComment" placeholder="Add comment to this  story...">
    </textarea>
    <div class="output-comments"></div>
  </div>
</template>

<script>
import UserInitials from './UserInitials'

export default {
  name: 'Comments',
  components: {
    UserInitials
  },
  data: () => {
    newComment: ''
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.comments-block {
  margin: 20px 10% 0 10%;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
  justify-content: center;

  .input-comment {
    width: 60%;
    height: 45px;
    line-height: 2rem;
    margin-left: 20px;
    padding: 5px 10px;
    font-size: 1.2rem;
    border: none;
    border-radius: 4px;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, .3);
    transition: all 0.5s;

    &::placeholder {
      color: map-get($colors, bg);
    }

    &:focus {
      height: 100px;
      box-shadow: 0 0 8px rgba(0, 0, 0, .5);
      &::placeholder {
        color: map-get($colors, border);
      }
    }
  }
}
</style>
