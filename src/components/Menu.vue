<template>
  <transition name="fade">
    <div class="popover" v-if="isOpen">
      <ul class="menu">
        <li>
          <router-link to="/posts/new">New Publication</router-link>
        </li>
        <li class="line">
          <router-link to="/posts">Your Stories</router-link>
        </li>
        <!-- <li><a href="#">Profile</a></li>
        <li class="line"><a href="#">Settings</a></li> -->
        <li><a href="#" @click="signOut">Sign Out</a></li>
      </ul>
    </div>
  </transition>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Menu',
  props: ['open'],
  data: () => ({
    isOpen: false
  }),
  watch: {
    open: {
      immediate: true,

      handler(value) {
        this.isOpen = value
      }
    }
  },
  methods: {
    ...mapActions(['logout']),

    signOut() {
      this.logout()
    },

    close() {
      this.isOpen = false
    }
  },

  mounted() {
    document.addEventListener('click', this.close)
  },

  destroyed() {
    document.removeEventListener('click', this.close)
  }
}
</script>

<style scoped lang="scss">
@import '../styles/variables.scss';

.popover {
  position: absolute;
  top: 66px;
  right: 0;
  z-index: 10;
  opacity: 1;
  visibility: visible;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 1px rgba(100, 100, 100, 0.54);

  &:before {
    position: absolute;
    z-index: -1;
    content: '';
    right: 34px;
    top: -9px;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #fff transparent;
    -webkit-filter: drop-shadow(0 -1px 0 rgba(100, 100, 100, 0.54));
  }
}

.menu {
  font-size: 1rem;
  color: #000;

  li {
    margin-bottom: 10px;
    cursor: pointer;
    height: 60px;
    display: flex;
    align-items: center;

    &.line {
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 1px solid map-get($colors, border);
    }
  }

  a {
    font-weight: 500;
    padding-left: 40px;
    height: 100%;
    display: flex;
    align-items: center;
  }
}

@media(min-width: #{map-get($breakpoints, small)}) {
  .popover {
    width: 250px;
    right: 25px;

    &:before {
      right: 13px;
    }
  }
}

@media(min-width: #{map-get($breakpoints, medium)}) {
  .popover {
    &:before {
      right: 15px;
    }
  }
}

@media(min-width: #{map-get($breakpoints, large)}) {
  .popover {
    &:before {
      right: 19px;
    }
  }
}
</style>
