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
    padding: 8px;
    font-size: .9rem;
    margin: 0 3px;
    border-radius: 4px;
    transition: all 0.5s;
    color: map-get($colors, secondary);
    border: 1px solid map-get($colors, secondary);

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

@media(min-width: #{map-get($breakpoints, small)}) {
  .redistration {
    a {
      padding: 8px 16px;
      margin: 0 15px;
    }
  }
}
</style>
