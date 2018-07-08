<template>
  <div>
    <div class="user-logo" @click="menuVisible = !menuVisible">{{ initials }}</div>
    <Menu :open="menuVisible" />
  </div>
</template>

<script>
import Menu from './Menu'

import { mapGetters } from 'vuex'

export default {
  name: 'UserProfile',
  components: {
    Menu,
  },
  data: () => ({
    menuVisible: false,
  }),
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
@import '../styles/animation.scss';

.user-logo {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 50%;
  color: map-get($colors, secondary);
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.4);
  border: 1px solid map-get($colors, secondary);
}

.fade-enter,
.fade-enter-to {
  animation: fadeInUp 0.6s;
}

.fade-leave,
.fade-leave-to {
  animation: fadeOutDown 0.6s;
}
</style>
