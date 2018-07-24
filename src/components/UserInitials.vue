<template>
  <div class="user-logo">{{ initials }}</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserInitials',
  computed: {
    ...mapGetters(['currentUser']),

    initials() {
      const initials = this.currentUser.name.split(' ')

      return initials.map(i => i.charAt(0)).join('')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/variables.scss';

.user-logo {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 50%;
  color: map-get($colors, secondary);
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.4);
  border: 1px solid map-get($colors, secondary);
}
</style>
