<template>
  <div>
    <div class="redistration">
      <a @click.prevent="isModalSingIn = true" class="sing-in" href="#">Sing In</a>
      <a @click.prevent="isModalGetStarted = true" class="get-started" href="#">Get Started</a>
    </div>

    <ModalSingIn v-if="isModalSingIn">
      <SingIn />
    </ModalSingIn>
    <ModalGetStarted v-if="isModalGetStarted" @close="isModalGetStarted = false">
      <GetStarted />
    </ModalGetStarted>
  </div>
</template>

<script>
import ModalSingIn from './ModalSingIn'
import ModalGetStarted from './ModalGetStarted'
import SingIn from './form/SingIn'
import GetStarted from './form/GetStarted'

export default {
  name: 'FormRegistration',
  components: {
    ModalSingIn,
    ModalGetStarted,
    SingIn,
    GetStarted
  },
  data: () => ({
    isModalSingIn: false,
    isModalGetStarted: false
  })
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
  }
}
</style>
