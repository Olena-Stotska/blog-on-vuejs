<template>
  <div>
    <div class="user-logo">{{ initials }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserProfile',
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
  color: map-get($colors, secondary);
  font-size: 1.2rem;
  padding: 8px;
  font-weight: 500;
  border-radius: 50%;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.4);
  border: 1px solid map-get($colors, secondary);
}
</style>
