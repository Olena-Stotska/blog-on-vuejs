<template>
  <div @click="menuVisible = !menuVisible">
    <UserInitials />
    <Menu :open="menuVisible" />
  </div>
</template>

<script>
import Menu from './Menu'
import UserInitials from './UserInitials'

export default {
  name: 'UserProfile',
  components: {
    Menu,
    UserInitials
  },
  data: () => ({
    menuVisible: false,
  })
}
</script>

<style scoped lang="scss">
@import '../styles/animation.scss';

.fade-enter,
.fade-enter-to {
  animation: fadeInUp 0.6s;
}

.fade-leave,
.fade-leave-to {
  animation: fadeOutDown 0.6s;
}
</style>
