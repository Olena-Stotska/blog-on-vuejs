<template>
  <div class="comments-block">
    <UserInitials />
    <textarea class="input-comment" placeholder="Add comment to this  story..."></textarea>
    <div class="output-comments"></div>
  </div>
</template>

<script>
import UserInitials from './UserInitials'

export default {
  name: 'Comments',
  components: {
    UserInitials
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
    border: 2px solid map-get($colors, border);
    border-radius: 4px;
    outline: none;
    transition: all 0.5s;

    &::placeholder {
      color: map-get($colors, bg);
    }

    &:focus {
      height: 100px;
      border: 2px solid map-get($colors, bg);
      &::placeholder {
        color: map-get($colors, border);
      }
    }
  }
}
</style>
