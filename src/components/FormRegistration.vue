<template>
  <div v-if="!isLogged">
    <div class="redistration">
      <a @click.prevent="isModalSingIn = true" class="sing-in" href="#">Sing In</a>
      <a @click.prevent="isModalGetStarted = true" class="get-started" href="#">Get Started</a>
    </div>

    <Modal v-if="isModalSingIn" @close="isModalSingIn = false" >
      <SingIn @login="isModalSingIn = false" />
    </Modal>

    <Modal v-if="isModalGetStarted" @close="isModalGetStarted = false" >
      <GetStarted  @registered="isModalGetStarted = false" />
    </Modal>
  </div>
</template>

<script>
import Modal from './Modal'
import SingIn from './form/SingIn'
import GetStarted from './form/GetStarted'

import { mapState } from 'vuex'

export default {
  name: 'FormRegistration',
  components: {
    Modal,
    SingIn,
    GetStarted
  },
  data: () => ({
    isModalSingIn: false,
    isModalGetStarted: false
  }),
  computed: {
    ...mapState(['isLogged']),
  }
}
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";

.redistration {
  a {
    color: map-get($colors, secondary);
    padding: 8px 16px;
    font-size: .9rem;
    border: 1px solid map-get($colors, secondary);
    margin: 0 10px;
    border-radius: 4px;
    transition: all 0.5s;

    &:hover {
      color: map-get($colors, secondary-hover);
      border: 1px solid map-get($colors, secondary-hover);
    }
  }

  .sing-in {
    border: none;

    &:hover {
      border: none;
    }
  }
}
</style>
