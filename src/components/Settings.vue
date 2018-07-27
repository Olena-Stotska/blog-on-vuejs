<template>
  <div class="container">
    <h1>Settings</h1>
    <p>Email settings</p>
    <div>
      <div>
        <h3>Your email</h3>
        <span>{{currentUser.email}}</span>
      </div>
    </div>
    <div>
      <button class="btn-edit">Edit</button>
      <div>
        <button class="btn-save">Save</button>
        <button class="btn-cansel">Cansel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Settings',
  computed: {
    ...mapGetters(['currentUser'])
  }
}
</script>

<style scoped lang="scss">
.container {
  text-align: center;
}
</style>
