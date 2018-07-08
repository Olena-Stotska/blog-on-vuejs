<template>
  <transition name="fade">
    <div class="popover" v-if="isOpen">
      <ul class="menu">
        <li><a href="#">New Publication</a></li>
        <li class="line"><a href="#">Stories</a></li>
        <li><a href="#">Profile</a></li>
        <li class="line"><a href="#">Settings</a></li>
        <li><a href="#">Sign Out</a></li>
      </ul>
    </div>
  </transition>
</template>

<script>
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
  top: 60px;
  right: 0;
  z-index: 10;
  opacity: 1;
  visibility: visible;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 1px map-get($colors, primary);

  &:before {
    position: absolute;
    z-index: -1;
    content: '';
    right: 34px;
    top: -9px;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #fff transparent;
    -webkit-filter: drop-shadow(0 -1px 0 map-get($colors, primary));
  }
}

.menu {
  font-size: 1rem;
  color: #000;
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 40px;
    margin-top: 50px;

    &.line {
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 1px solid map-get($colors, border);
    }
  }

  a {
    font-weight: 700;
    padding-left: 40px;
  }
}

@media(min-width: #{map-get($breakpoints, small)}) {
  .popover {
    width: 300px;
    right: 4px;
  }
}
</style>
